const hotpo = (n, acc = 0) => {
    if (n <= 1) {
        return acc;
    } else {
        return hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1);
    }
};
