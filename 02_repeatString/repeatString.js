const repeatString = function(string,num) {
    let i = 0;
    let finalString = "";
    if (num >= 0) {
        while (i < num) {
            finalString = finalString + string;
            i++
        }
        return finalString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
