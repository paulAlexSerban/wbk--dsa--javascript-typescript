const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrevs = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
});
console.log(abbrevs);
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]
