const now = new Date();
console.log(now);

const dateOne = new Date('May 11 2018 09:00');
console.log(dateOne);

const dateTwo = new Date(2018, 4, 11, 9, 0);
console.log(dateTwo);

now.setFullYear(2017);
console.log(now.toDateString());

console.log(now.toISOString()); // this is the way to pass dates to backend
