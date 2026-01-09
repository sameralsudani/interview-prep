// var, let, and const

var x = 1;
console.log(x); // 1

/////////////////////////
var x2 = 1;
var x2 = 2;
console.log(x2); // 2

/////////////////////////
let x3 = 1;
let x3 = 2;
console.log(x3); // SyntaxError: Identifier 'x3' has already been declared

/////////////////////////
let x4 = 1;
x4 = 2;
console.log(x4); // 2

/////////////////////////
const x5 = 1;
x5 = 2;
console.log(x5); // TypeError: Assignment to constant variable.

// global scope
var x = 1; // x is global scoped and available everywhere
let y = 2; // x is global scoped and available everywhere
const z = 3; // x is global scoped and available everywhere
// it doesn't matter if we use var, const or let

////////////////////////
// local scope
// 1- function scope
// 2- block scope
function myFunction() {
  const z2 = 5;
  console.log(z2); // 5

  {
    let y2 = 4;
    console.log(y2); // 4
  }
}
myFunction();

////////////////////////
let y3 = 2;

function myFunction2() {
  const z3 = 5;
  console.log(y3); // 2

  {
    let y3 = 4;
    console.log(y3); // 4
  }
}
myFunction2();
