/**
 * Declaring and Defining function is same grammar - it means 
 * to create a function.
 * 
 * Calling or Invoking a function is same grammar - it means
 * to execute a function.
 */

function sayHello() {
  return "Hello World";
}

function sayHi(name) {
  return `Hi ${name}`;
}

let hello = sayHello();
let hi = sayHi('Jeremy');

console.log(hello);
console.log(`${hi} \n`);

// Parameters/Arguments - inputs supplied to a function
function multiplyTwoNumbers(n1, n2) {
  return n1*n2;
}

const multiple= multiplyTwoNumbers(4,5);
console.log(multiple);

// In JavaScript, we can explicitly choose to return a value from a function.
// when we don't return a value, it is 'undefined'
function makeUndefine(a,b) {

}
const maker = makeUndefine(1,2);
console.log(`\n maker:${maker}`);

/**
 * OPERATORS IN JAVASCRIPT
 * Operands: values on either side of an operator.
 * 
 * addition: +
 * subtraction: -
 * division: /
 * multiplication: *
 * modulus: %
 * 
 * loose equality: ==
 * loose inequality: !=
 * strict equality: === : compares two values and evaluates to true if they are equal.
 * strict inequality: !==
 * 
 * greater than: >
 * less than: <
 * greater than or equal to: >=
 * less than or equal to: <=
 */