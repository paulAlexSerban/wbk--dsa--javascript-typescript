var hotpo = function (n) {
    var rs = 0;
    while (n > 1) {
        rs++;
        n = n % 2 ? n * 3 + 1 : n / 2;
    }
    return rs;
};
