/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
  	throw "Argument is NaN";
  } else if (typeof a != "number" || typeof b != "number" ){
  	throw "Parameter is not a number!";
  } else if (!isFinite(a) || !isFinite(b)) {
  	throw "Argument is infinite";
  } else return a + b;
};

export default sum;
