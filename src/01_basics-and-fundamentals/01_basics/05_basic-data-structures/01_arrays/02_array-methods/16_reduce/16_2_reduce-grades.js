const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal);
});

console.log(maxGrade);
// Finding the min value using Math.min:
const minGrade = grades.reduce((min, currVal) =>
    //using implicit return for variety's sake
    Math.min(min, currVal)
);
console.log(minGrade);
// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.
