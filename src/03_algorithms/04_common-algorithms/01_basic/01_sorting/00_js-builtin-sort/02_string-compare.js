const stringsArray = ['Steele', 'Colt', 'Data Structures', 'Algorithms'];

const compareByLength = (str1, str2) => {
    return str1.length - str2.length;
};

stringsArray.sort(compareByLength);

console.log(stringsArray);
