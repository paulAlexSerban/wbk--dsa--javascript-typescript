const hotpo = (n) => (n === 1 ? 0 : 1 + hotpo(n % 2 ? n * 3 + 1 : n / 2));
