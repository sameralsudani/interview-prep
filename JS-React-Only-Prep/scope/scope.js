// Find Code Output

var x = Math.floor(Math.random());
if (x > 0.5) {
  var x = 1;
} else {
  var x = 2; // this x has a global scope, its avalable every where
}

console.log(x); // 2

// ////////
var x2 = Math.floor(Math.random());
if (x2 > 0.5) {
  var x2 = 1;
} else {
  let x2 = 2; // this x has a block scope, its only avalable between {}
}

console.log(x2); // 0

///////////
// When using const, let, we don't need to worry about function scope because a fuction scope {} is a block scope {}
function test1() {
  const b = 2; // const variable is block scoped : its available between function {}
  //We don't need to worry about function scope because here a fuction scope is a block scope with const or let

  if (true) {
    const c = 3; // const variable is block scoped: its available between if {}
    console.log(b, c); // 2,3
  }
  console.log(b, c); // ReferenceError: c is not defined
}

test1();

///////////////////////////////
// When using var, we need to worry about function scope {}
function test() {
  var b = 2; // var variable is function scoped : its available between function test{ }

  if (true) {
    var c = 3; // var variable is function scoped: its available between function test{ }
    console.log(b, c); // 2,3
  }

  console.log(b, c); // 2 3
}

test();

////////////////////////////

function test2() {
  var b = 2; // var variable is function scoped : its available between function {}

  if (true) {
    const c = 3; // const variable is block scoped: its available between if {}
    console.log(b, c); // 2 3
  }

  console.log(b, c); // ReferenceError: c is not defined.
  // We cannot use c outside it's block scope
}

test2();
