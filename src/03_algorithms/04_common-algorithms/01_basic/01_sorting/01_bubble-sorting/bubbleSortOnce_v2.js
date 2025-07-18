function bubbleSortOnce(arr) {
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] > newArr[i + 1]) {
            [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
        }
    }
    return newArr;
}

console.log('sorted once: ', bubbleSortOnce([37, 45, 29, 8, 3, -11, 200]));
