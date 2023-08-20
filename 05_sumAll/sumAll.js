const sumAll = function(num1, num2) {
	let sum = 0;
  let largerNumber = Math.max(num1, num2);
  let smallerNumber = Math.min(num1, num2);
  
  if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
  	return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
  	return "ERROR";
  }
  
  
  
  for (let i = smallerNumber; i <= largerNumber; i++) {
  
  	sum += i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
