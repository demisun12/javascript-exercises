const reverseString = function(string) {
	let i = string.length - 1;
    let finalString = "";
    while (i >= 0) {
    	finalString = finalString.concat(string[i]);
        i--
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
