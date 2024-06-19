const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  if (a>b) {
    return a - b; 
  } else {
    return b - a;
  }
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  } 
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  if (a === 0) {
    return 1
  } else {
    for (let i = a; i > 0; i--) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
