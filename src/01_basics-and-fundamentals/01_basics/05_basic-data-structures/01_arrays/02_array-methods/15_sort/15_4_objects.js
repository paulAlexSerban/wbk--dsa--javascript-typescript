const players = [
    { name: 'mario', score: 10 },
    { name: 'luigi', score: 80 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 },
    { name: 'paul', score: 90 },
];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (a.score < b.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

players.sort((a, b) => b.score - a.score);

console.log(players);
