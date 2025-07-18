const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true },
];

const premiumUsers = users.filter((user) => {
    return user.premium;
});

console.log(premiumUsers);
