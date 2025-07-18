const scores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'shaun', score: 60 },
];

const marioTotal = scores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }

    return acc;
}, 0);

console.log({ marioTotal });
