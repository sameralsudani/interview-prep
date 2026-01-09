/* 20 String Methods */

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt() method/function 
console.log(stringOne.charAt(1)); // r

// charCodeAt() method/function 
console.log(stringOne.charCodeAt(1)); // 114

// concat() method/function 
console.log(stringOne.concat(stringTwo)); // "freeCodeCamp is the best place to learnfrontend and backend development"

// endsWith() method/function 
console.log(stringOne.endsWith("to")); // false

// fromCharCode() method/function 
console.log(String.fromCharCode(114)); // r

// includes() method/function 
console.log(stringTwo.includes("end")); // true
 
// indexOf() method/function 
console.log(stringTwo.indexOf("end")); // 5
 
// lastIndexOf() method/function 
console.log(stringTwo.lastIndexOf("end")); // 17

// match() method/function 
console.log(stringTwo.match(/end/g)); // ["end", "end"]

// repeat() method/function 
console.log(stringOne.repeat(3)); // freeCodeCamp is the best place to learnfreeCodeCamp is the best place to learnfreeCodeCamp is the best place to learn

// replace() method/function 
console.log(stringTwo.replace(/end/g, "END")); // frontEND and backEND development"

// search() method/function 
console.log(stringTwo.search("end")); // 5

// slice() method/function 
console.log(stringTwo.slice(2, 4)); // on

// split() method/function 
console.log(stringOne.split(" ")); // ["freeCodeCamp", "is", "the", "best", "place", "to", "learn"]

// startsWith()
console.log(stringOne.startsWith("free")); // true

// substr()
console.log(stringTwo.substr(2, 4)); // onte

// substring()
console.log(stringTwo.substring(2, 4)); // on

// toLowerCase()
console.log(stringOne.toLowerCase()); // freecodecamp is the best place to learn

// toUpperCase()
console.log(stringOne.toUpperCase()); // FREECODECAMP IS THE BEST PLACE TO LEARN

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim()); // Subscribe now!
