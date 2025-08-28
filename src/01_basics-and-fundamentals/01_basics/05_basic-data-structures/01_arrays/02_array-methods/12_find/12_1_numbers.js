const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHightScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHightScore);
