const palindromes = function (string) {
    //take string, remove punctuation, and convert all to lowercase. put into array
    let newStr = '';
    const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', ' '];
    for (let i = 0; i < string.length; i++) {
        if (!punctuation.includes(string[i])) {
            newStr += string[i];
        };
    }
    let str = newStr.toLowerCase();
    let palin = ''
    for (let i = str.length - 1; i >= 0; i--) {
        palin += str[i];
    }
    if (palin === str) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
