// factory function - functions that create objects

const createCircle = (radius) => {
    return {
        radius,
        draw() {
            console.log('draw');
        },
    };
};

const circleOne = createCircle(1);

console.log(circleOne);
circleOne.draw();

const circleTwo = createCircle(5);
