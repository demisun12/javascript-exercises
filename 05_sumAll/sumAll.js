const sumAll = function(start,end) {
    let sum = 0;
    let i = start;
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number' ){
        return "ERROR";
    } else {
        if (start < end) {
            while (i <= end) {
                sum += i;
                i++
            }
        } else if (start > end) {
            while (i >= end) {
                sum += i;
                i--
            }
        };
        return sum;
    };
};

// Do not edit below this line
module.exports = sumAll;
