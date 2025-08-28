// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let addressOne = new Address('a', 'b', 'c');
let addressTwo = new Address('a', 'b', 'c');
let addressThree = addressOne;

const areEquals = (addrOne, addrTwo) => {
    // if using the === (equality operator) we check if the object reference the same constructor, but we need to check the values of properties
    return addrOne.street === addrTwo.street && addrOne.city === addrTwo.city && addrOne.zipCode === addrTwo.zipCode;
};

const areSame = (addrOne, addrTwo) => {
    // tells us if both addresses reference the same object
    return addrOne === addrTwo;
};

console.log(areEquals(addressOne, addressTwo));
console.log(areSame(addressOne, addressTwo));
console.log(areSame(addressOne, addressThree));
