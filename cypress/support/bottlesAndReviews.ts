import { faker } from "@faker-js/faker";

export const bottle1 = {
  id: faker.datatype.uuid(),
  name: "Elijah Craig Barrel Proof",
  type: "Bourbon",
  distiller: "Heaven Hill",
  bottler: "Elijah Craig",
  producer: "Elijah Craig",
  country: "USA",
  region: "Kentucky",
  price: "69.99",
  age: "12yrs",
  year: "2022",
  batch: "A122",
  alcoholPercent: "60.4%",
  proof: "120.8pf",
  size: "750ml",
  color: "Amber",
  finishing: "None",
};

export const bottle2 = {
  id: faker.datatype.uuid(),
  name: "Four Roses SiB BS OBSV",
  type: "Bourbon",
  distiller: "Four Roses",
  bottler: "Four Roses",
  producer: "Four Roses",
  country: "USA",
  region: "Kentucky",
  price: "140",
  age: "9yrs 5mos",
  year: "2022",
  batch: "Binny's Pick",
  alcoholPercent: "56.3",
  proof: "112.6",
  size: "750ml",
  color: "Brick",
  finishing: "None",
};

export const bottle3 = {
  id: faker.datatype.uuid(),
  name: "Kirkland Single Barrel",
  type: "Bourbon",
  distiller: "Barton 1792",
  bottler: "Barton 1792",
  producer: "Barton 1792",
  country: "USA",
  region: "Kentucky",
  price: "34.99",
  age: "NAS",
  year: "2022",
  batch: "N/A",
  alcoholPercent: "60",
  proof: "120",
  size: "1L",
  color: "Straw",
  finishing: "None",
};

export const review1 = {
  id: faker.datatype.uuid(),
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  imageId: faker.datatype.uuid(),

  date: "01/01/2023",
  setting: "Having some bourbon after a day of work",
  glassware: "Copita",
  restTime: "10min",
  nose: "Nutty as all hell, toffee, caramel, cinnamon, burnt sugar, sweet oak, old rickhouse, black pepper, clove, confectioner sugar, grape, plum, almost smells finished.",
  palate:
    "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove.",
  finish:
    "Strong, sweet oak, black peppercorn, big caramel notes round the palate. Mint, chocolate, there's a really light fruit note that I can't quite place, but it's well balanced with the darker flavors of the finish.",
  thoughts:
    "Really good stuff. Dark flavors dominate with the caramel, dark chocolate, and peppercorns. There's small waves of a light fruit note I still can't quite place, maybe green grapes? It's really well balanced with the caramel, oak, and chocolate, plus the baking spices and mint make the finish last for a long, long time.",
  cherry: faker.datatype.number({ min: 0, max: 5 }),
  strawberry: faker.datatype.number({ min: 0, max: 5 }),
  raspberry: faker.datatype.number({ min: 0, max: 5 }),
  blackberry: faker.datatype.number({ min: 0, max: 5 }),
  blueberry: faker.datatype.number({ min: 0, max: 5 }),
  apple: faker.datatype.number({ min: 0, max: 5 }),
  banana: faker.datatype.number({ min: 0, max: 5 }),
  grape: faker.datatype.number({ min: 0, max: 5 }),
  stone: faker.datatype.number({ min: 0, max: 5 }),
  citrus: faker.datatype.number({ min: 0, max: 5 }),
  tropical: faker.datatype.number({ min: 0, max: 5 }),
  pepper: faker.datatype.number({ min: 0, max: 5 }),
  bakingSpice: faker.datatype.number({ min: 0, max: 5 }),
  cinnamon: faker.datatype.number({ min: 0, max: 5 }),
  herbal: faker.datatype.number({ min: 0, max: 5 }),
  mint: faker.datatype.number({ min: 0, max: 5 }),
  coffee: faker.datatype.number({ min: 0, max: 5 }),
  tobacco: faker.datatype.number({ min: 0, max: 5 }),
  leather: faker.datatype.number({ min: 0, max: 5 }),
  oak: faker.datatype.number({ min: 0, max: 5 }),
  toasted: faker.datatype.number({ min: 0, max: 5 }),
  smokey: faker.datatype.number({ min: 0, max: 5 }),
  peanut: faker.datatype.number({ min: 0, max: 5 }),
  almond: faker.datatype.number({ min: 0, max: 5 }),
  pecan: faker.datatype.number({ min: 0, max: 5 }),
  walnut: faker.datatype.number({ min: 0, max: 5 }),
  oily: faker.datatype.number({ min: 0, max: 5 }),
  floral: faker.datatype.number({ min: 0, max: 5 }),
  corn: faker.datatype.number({ min: 0, max: 5 }),
  rye: faker.datatype.number({ min: 0, max: 5 }),
  wheat: faker.datatype.number({ min: 0, max: 5 }),
  malt: faker.datatype.number({ min: 0, max: 5 }),
  dough: faker.datatype.number({ min: 0, max: 5 }),
  vanilla: faker.datatype.number({ min: 0, max: 5 }),
  caramel: faker.datatype.number({ min: 0, max: 5 }),
  molasses: faker.datatype.number({ min: 0, max: 5 }),
  butterscotch: faker.datatype.number({ min: 0, max: 5 }),
  honey: faker.datatype.number({ min: 0, max: 5 }),
  chocolate: faker.datatype.number({ min: 0, max: 5 }),
  toffee: faker.datatype.number({ min: 0, max: 5 }),
  sugar: faker.datatype.number({ min: 0, max: 5 }),
  overallRating: 3,
  value: 3.5,
};

export const review2 = {
  id: faker.datatype.uuid(),
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  imageId: faker.datatype.uuid(),

  date: "01/01/2023",
  setting: "Having some bourbon after a day of work",
  glassware: "Copita",
  restTime: "10min",
  nose: "Nutty as all hell, toffee, caramel, cinnamon, burnt sugar, sweet oak, old rickhouse, black pepper, clove, confectioner sugar, grape, plum, almost smells finished.",
  palate:
    "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove.",
  finish:
    "Strong, sweet oak, black peppercorn, big caramel notes round the palate. Mint, chocolate, there's a really light fruit note that I can't quite place, but it's well balanced with the darker flavors of the finish.",
  thoughts:
    "Really good stuff. Dark flavors dominate with the caramel, dark chocolate, and peppercorns. There's small waves of a light fruit note I still can't quite place, maybe green grapes? It's really well balanced with the caramel, oak, and chocolate, plus the baking spices and mint make the finish last for a long, long time.",
  cherry: faker.datatype.number({ min: 0, max: 5 }),
  strawberry: faker.datatype.number({ min: 0, max: 5 }),
  raspberry: faker.datatype.number({ min: 0, max: 5 }),
  blackberry: faker.datatype.number({ min: 0, max: 5 }),
  blueberry: faker.datatype.number({ min: 0, max: 5 }),
  apple: faker.datatype.number({ min: 0, max: 5 }),
  banana: faker.datatype.number({ min: 0, max: 5 }),
  grape: faker.datatype.number({ min: 0, max: 5 }),
  stone: faker.datatype.number({ min: 0, max: 5 }),
  citrus: faker.datatype.number({ min: 0, max: 5 }),
  tropical: faker.datatype.number({ min: 0, max: 5 }),
  pepper: faker.datatype.number({ min: 0, max: 5 }),
  bakingSpice: faker.datatype.number({ min: 0, max: 5 }),
  cinnamon: faker.datatype.number({ min: 0, max: 5 }),
  herbal: faker.datatype.number({ min: 0, max: 5 }),
  mint: faker.datatype.number({ min: 0, max: 5 }),
  coffee: faker.datatype.number({ min: 0, max: 5 }),
  tobacco: faker.datatype.number({ min: 0, max: 5 }),
  leather: faker.datatype.number({ min: 0, max: 5 }),
  oak: faker.datatype.number({ min: 0, max: 5 }),
  toasted: faker.datatype.number({ min: 0, max: 5 }),
  smokey: faker.datatype.number({ min: 0, max: 5 }),
  peanut: faker.datatype.number({ min: 0, max: 5 }),
  almond: faker.datatype.number({ min: 0, max: 5 }),
  pecan: faker.datatype.number({ min: 0, max: 5 }),
  walnut: faker.datatype.number({ min: 0, max: 5 }),
  oily: faker.datatype.number({ min: 0, max: 5 }),
  floral: faker.datatype.number({ min: 0, max: 5 }),
  corn: faker.datatype.number({ min: 0, max: 5 }),
  rye: faker.datatype.number({ min: 0, max: 5 }),
  wheat: faker.datatype.number({ min: 0, max: 5 }),
  malt: faker.datatype.number({ min: 0, max: 5 }),
  dough: faker.datatype.number({ min: 0, max: 5 }),
  vanilla: faker.datatype.number({ min: 0, max: 5 }),
  caramel: faker.datatype.number({ min: 0, max: 5 }),
  molasses: faker.datatype.number({ min: 0, max: 5 }),
  butterscotch: faker.datatype.number({ min: 0, max: 5 }),
  honey: faker.datatype.number({ min: 0, max: 5 }),
  chocolate: faker.datatype.number({ min: 0, max: 5 }),
  toffee: faker.datatype.number({ min: 0, max: 5 }),
  sugar: faker.datatype.number({ min: 0, max: 5 }),
  overallRating: 3,
  value: 3.5,
};

export const review3 = {
  id: faker.datatype.uuid(),
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  imageId: faker.datatype.uuid(),

  date: "01/01/2023",
  setting: "Having some bourbon after a day of work",
  glassware: "Copita",
  restTime: "10min",
  nose: "Nutty as all hell, toffee, caramel, cinnamon, burnt sugar, sweet oak, old rickhouse, black pepper, clove, confectioner sugar, grape, plum, almost smells finished.",
  palate:
    "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove.",
  finish:
    "Strong, sweet oak, black peppercorn, big caramel notes round the palate. Mint, chocolate, there's a really light fruit note that I can't quite place, but it's well balanced with the darker flavors of the finish.",
  thoughts:
    "Really good stuff. Dark flavors dominate with the caramel, dark chocolate, and peppercorns. There's small waves of a light fruit note I still can't quite place, maybe green grapes? It's really well balanced with the caramel, oak, and chocolate, plus the baking spices and mint make the finish last for a long, long time.",
  cherry: faker.datatype.number({ min: 0, max: 5 }),
  strawberry: faker.datatype.number({ min: 0, max: 5 }),
  raspberry: faker.datatype.number({ min: 0, max: 5 }),
  blackberry: faker.datatype.number({ min: 0, max: 5 }),
  blueberry: faker.datatype.number({ min: 0, max: 5 }),
  apple: faker.datatype.number({ min: 0, max: 5 }),
  banana: faker.datatype.number({ min: 0, max: 5 }),
  grape: faker.datatype.number({ min: 0, max: 5 }),
  stone: faker.datatype.number({ min: 0, max: 5 }),
  citrus: faker.datatype.number({ min: 0, max: 5 }),
  tropical: faker.datatype.number({ min: 0, max: 5 }),
  pepper: faker.datatype.number({ min: 0, max: 5 }),
  bakingSpice: faker.datatype.number({ min: 0, max: 5 }),
  cinnamon: faker.datatype.number({ min: 0, max: 5 }),
  herbal: faker.datatype.number({ min: 0, max: 5 }),
  mint: faker.datatype.number({ min: 0, max: 5 }),
  coffee: faker.datatype.number({ min: 0, max: 5 }),
  tobacco: faker.datatype.number({ min: 0, max: 5 }),
  leather: faker.datatype.number({ min: 0, max: 5 }),
  oak: faker.datatype.number({ min: 0, max: 5 }),
  toasted: faker.datatype.number({ min: 0, max: 5 }),
  smokey: faker.datatype.number({ min: 0, max: 5 }),
  peanut: faker.datatype.number({ min: 0, max: 5 }),
  almond: faker.datatype.number({ min: 0, max: 5 }),
  pecan: faker.datatype.number({ min: 0, max: 5 }),
  walnut: faker.datatype.number({ min: 0, max: 5 }),
  oily: faker.datatype.number({ min: 0, max: 5 }),
  floral: faker.datatype.number({ min: 0, max: 5 }),
  corn: faker.datatype.number({ min: 0, max: 5 }),
  rye: faker.datatype.number({ min: 0, max: 5 }),
  wheat: faker.datatype.number({ min: 0, max: 5 }),
  malt: faker.datatype.number({ min: 0, max: 5 }),
  dough: faker.datatype.number({ min: 0, max: 5 }),
  vanilla: faker.datatype.number({ min: 0, max: 5 }),
  caramel: faker.datatype.number({ min: 0, max: 5 }),
  molasses: faker.datatype.number({ min: 0, max: 5 }),
  butterscotch: faker.datatype.number({ min: 0, max: 5 }),
  honey: faker.datatype.number({ min: 0, max: 5 }),
  chocolate: faker.datatype.number({ min: 0, max: 5 }),
  toffee: faker.datatype.number({ min: 0, max: 5 }),
  sugar: faker.datatype.number({ min: 0, max: 5 }),
  overallRating: 3,
  value: 3.5,
};