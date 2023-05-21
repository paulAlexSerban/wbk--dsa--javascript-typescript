/**
 * any
 * ========
 * The any data type is the super type of all types in TypeScript.
 * It denotes a dynamic type. Using the any type is equivalent to opting out of type 
 * checking for a variable.
 * But, it takes away all the advantages of using TypeScript.
 */

(() => {
  let favoriteActivities: any[];
  favoriteActivities = ["Sports", 1, true, {}];
  console.log(favoriteActivities);
})()