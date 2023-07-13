// Calling the function before it is declared
console.log(multiplyNumbers(2, 3)); // Output: 6

// Function expression
var multiplyNumbers = function(a, b) {
  return a * b;
};

// Hoisting allows the function to be called before it is declared
console.log(multiplyNumbers(4, 5));
