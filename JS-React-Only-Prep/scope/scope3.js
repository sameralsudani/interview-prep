var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`); // global: 1
console.log(`global: ${y}`); // global: 2
console.log(`global: ${z}`); // global: 3

function myFunction() {
  var x = 10;
  const z = 5;
  console.log(`function: ${x}`); // function: 10
  console.log(`function: ${y}`); // function: 2
  console.log(`function: ${z}`); // function: 5

  {
    var x = 11;
    const z = 6;
    console.log(`block: ${x}`); // block: 11
    console.log(`block: ${y}`); // block: 2
    console.log(`block: ${z}`); // block: 6
  }
}

myFunction();
