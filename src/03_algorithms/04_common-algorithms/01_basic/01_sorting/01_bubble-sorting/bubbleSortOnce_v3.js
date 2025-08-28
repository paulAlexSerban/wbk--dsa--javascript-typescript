function bubbleSortOnce(a) {
    return [...a].map((e, i, arr) => (e > arr[i + 1] ? ((arr[i] = arr[i + 1]), (arr[i + 1] = e), arr[i]) : e));
}

console.log('sorted once: ', bubbleSortOnce([37, 45, 29, 8, 3, -11, 200]));
