/**
 * At their most basic, objects are just collections of key-value pairs.
 * In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys)
 */

/**
 * Object Types
 * - object exist to describe the type of object that is getting used somewhere
 */

const tekkenCharacter: {
  // object type
  player: string;
  fightingStyle: string;
  human: boolean;
} = {
  // the object itself
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

console.log(tekkenCharacter);

const product: {
  // object type
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
} = {
  // the object itself
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
