const getProcessingTimeInMS = (time = []) => {
    return console.log(`${(time[0] * 1000 + time[1] / 1e6).toFixed(3)}ms`);
};

/** Somewhere at the start / before the benchmarked code
 * const _hrtime = process.hrtime()
 */

/** Somewhere at the end / after the benchmarked code
 * getProcessingTimeInMS(process.hrtime(_hrtime))
 */

module.exports = {
    getProcessingTimeInMS,
};
