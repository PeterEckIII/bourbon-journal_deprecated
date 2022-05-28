import React, { useCallback } from "react";
import { useBeforeUnload } from "@remix-run/react";

export interface TextReviewInputType {
  error?: string;
  labelName: string;
  name: string;
  type: string;
  value: string | number;
  emoji?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextReviewInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, value, error, type, emoji, changeHandler }) => {
  useBeforeUnload(
    useCallback(() => {
      if (typeof value === "number") {
        localStorage.setItem(name, String(value));
      }
      if (typeof value === "string") {
        localStorage.setItem(name, value);
      }
    }, [])
  );

  const handleBlur = (key: string, value: string | number) => {
    if (typeof window !== "undefined") {
      if (typeof value === "string") {
        return window.localStorage.setItem(key, value);
      } else if (typeof value === "number") {
        return window.localStorage.setItem(key, String(value));
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <label className="my-2 flex w-full flex-col gap-1" htmlFor={name}>
        {labelName} {emoji}{" "}
      </label>
      <div className="flex">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={changeHandler}
          aria-label={`${name}-input`}
          onBlur={() => handleBlur(name, value)}
          className="block w-full min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default TextReviewInput;
