const isLandscape = (width, height) => {
    return width > height;
};

// test case 1
console.log(isLandscape(800, 600));

// test case 2
console.log(isLandscape(300, 600));
