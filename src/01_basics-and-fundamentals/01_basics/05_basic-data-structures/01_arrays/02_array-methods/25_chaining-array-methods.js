const products = [
    {
        name: 'gold star',
        price: 20,
    },
    {
        name: 'mushroom',
        price: 40,
    },
    {
        name: 'green shells',
        price: 30,
    },
    {
        name: 'banana skin',
        price: 10,
    },
    {
        name: 'red shells',
        price: 50,
    },
];

const promos = products
    .filter((product) => product.price > 20)
    .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
