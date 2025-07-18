const checkSpeed = (speed) => {
    // avoid magic numbers
    const SPEED_LIMIT = 70;
    const KM_PER_POINT = 5;

    // Check if speed is ok
    if (speed <= SPEED_LIMIT + KM_PER_POINT) {
        console.log('Ok');
        return; // this solves the indentation issue, so no more else is needed
    }

    // Calculate points
    const points = Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);

    // Check if license is suspended
    if (points >= 12) {
        console.log('License suspended');
    } else {
        console.log(`Points ${points}`);
    }
};

// if Speed Limit = 70
// for every 5 km above the speed limit, the driver gets 1 point (5 -> 1 point)
// if driver gets 12 points -> suspended

// test cases
checkSpeed(50);
checkSpeed(70);
checkSpeed(71);
checkSpeed(76);
checkSpeed(90);
checkSpeed(180);
