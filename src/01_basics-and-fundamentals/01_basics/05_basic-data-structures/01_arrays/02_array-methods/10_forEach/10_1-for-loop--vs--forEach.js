const names = ['Alex', 'Mary', 'Nick', 'Jane'];
for (let i = 0; i < names.length; i++) {
    console.log(`The name is ${names[i]}`);
}

console.log('------------------------------');

names.forEach((name) => {
    console.log(`The name is ${name}`);
});
