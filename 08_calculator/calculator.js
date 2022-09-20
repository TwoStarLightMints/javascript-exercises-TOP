const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(elem => {
    sum += elem;
  });
  return sum;
};

const multiply = function(nums) {
  let prod = 1;
  nums.forEach(elem => {
    prod *= elem;
  });

  return prod;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	let fac = 1;

  for (let i = num; i > 0; i--) {
    fac *= i;
  }

  return fac;
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
