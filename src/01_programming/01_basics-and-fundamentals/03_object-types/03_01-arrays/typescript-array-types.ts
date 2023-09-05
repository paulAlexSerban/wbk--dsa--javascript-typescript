/**
 * Array Types
 * ===========
 * Array types can be written in one of two ways.
 * In the first, you use the type of the elements followed by [] to denote an array of that element type:
 * The types of the array can be flexible or strict (prevent mixing types)
 */
(() => {
  // Flexible (mixing types)
  const person :{
    name: string;
    age: number;
    hobbies: string[];
  } = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
  };

  for(const hobby of person.hobbies) {
    // TS does not complain about the following line because it knows that hobby is a string
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }

  // person.role.push("admin"); // TS will not throw an error
  let favoriteActivities: string[];

  // Strict (prevent mixing types)
  favoriteActivities = ["Sports"]
  // favoriteActivities = ["Sports", 1] // !!! ERROR !!!
  console.log(favoriteActivities);

  // Flexible (mixing types)
  let flexibleFavACtivities: any[];
  flexibleFavACtivities = ["Sports", 1, true, {}];
  console.log(flexibleFavACtivities);
})();
