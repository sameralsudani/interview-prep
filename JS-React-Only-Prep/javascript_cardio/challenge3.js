// Sum/add all numbers in array range
function sumAll(arr) {
  let min, max;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }

  let sum = 0;
  for (let i = min; i < max; i++) {
    // we are looping through from min going up to max (max included)
    sum += 1;
  }
  return sum;
}

sumAll([1, 4]); // => 10
sumAll([4, 1]); // => 10
sumAll([4, 4]); // => 4

// ***************************

// Find the difference between two arrays
function diffArray(arr1, arr2) {
  const union = [];
  for (let i = 0; i < arr1.length; i++) {
    // we are looping through arr1 from arr1[0] going up to arr1[3] (arr1[3])
    const currentEl = arr1[i];
    if (!union.includes(currentEl)) {
      // if currentEl is not included in union array
      union.push(currentEl); // then add it to union
    } // else skip and go back to line 31
  }
  for (let i = 0; i < arr2.length; i++) {
    // we are looping through arr2 from arr2[0] going up to arr2[3] (arr2[3])
    const currentEl = arr2[i];
    if (!union.includes(currentEl)) {
      // if currentEl is not included in union array
      union.push(currentEl); // then add it to union
    } // else skip and go back to line 38
  }

  console.log(union); // => [1,2,3,5,4]   we have all unique values from both arrays

  const symDiff = [];
  for (let i = 0; i < union.length; i++) {
    //we are looping through union from union[0] going up to union[3] (union[3])
    const currentEl = union[i];

    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      // if currentEl is in arr1 and not in arr2
      symDiff.push(currentEl); // then push currentEl to symDiff
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      // if currentEl is in arr2 and not in arr1
      symDiff.push(currentEl); // then push currentEl to symDiff
    }
  }
  return symDiff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // => [4]
diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]); // => [6,4]

// Filter unique vaules
const array = [1, 1, 2, 3, 6, 6, 3, 1];
const uniqueArray = [...new Set(array)]; // [1,2,3,6]

// Convert number to boolean
const isTrue = !0;
const isFalse = !!0;

console.log(isTrue, typeof isTrue); // true boolean

// Convert number to string
const val = 5 + ""; // 5
console.log(val, typeof val); // 5 string

// Convert string to int
let int = "15";
int = +int;
console.log(int, typeof int); // 15 number

// Convert float to int
let int2 = 19.8 | 0;
console.log(int2, typeof int2); // 19 number

// Remove last digit from a number
const int3 = (1553 / 10) | 0;
console.log(int3, typeof int3); // 155 number

// Turncate an array
let array2 = [0, 1, 2, 3, 4, 5];
array.length = 3; // [0,1,2]

// Last item in array
let array3 = [0, 1, 2, 3];
array.slice(-1); // [3]
