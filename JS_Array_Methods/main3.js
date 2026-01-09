let names = ["Danny", "Joe", "Sarah", "Molly"];
let names2 = ["Ali", "Hasan"];
let names3 = ["Jaffar", "Hiba"];

// names.toString()
const nameStr = names.toString(); // convert to a string
console.log("nameStr", nameStr); // returns one names srting seperated by a comma: =>  Danny,Joe,Sarah,Molly

// names.join()
const nameStr2 = names.join(","); // convert to a string
console.log("nameStr2", nameStr2); // returns one names srting seperated by a comma: =>  Danny,Joe,Sarah,Molly

const nameStr3 = names.join(" and "); // convert to a string
console.log("nameStr3", nameStr3); // returns one names srting seperated by a and : =>  Danny and Joe and Sarah and Molly

// names.concat(): concat/combine two array and store it in a variable (joinedNames)
const joinedNames = names.concat(names2);
console.log("joinedNames", joinedNames); // returns one combined array : =>  ["Danny", "Joe", "Sarah", "Molly", "Ali", "Hasan"]

const joinedNames2 = names.concat(names2, names3);
console.log("joinedNames2", joinedNames2); // returns one combined array : =>  ["Danny", "Joe", "Sarah", "Molly", "Ali", "Hasan", "Jaffar", "Hiba"]

// namesCopy.spilce(): remove or add element to an array, this method will change/mutate the original array
const namesCopy = [...names];
namesCopy.splice(1, 1); //  At index/positon 1, remove 1 element.
console.log("namesCopy", namesCopy); //  ["Danny", "Sarah", "Molly"];

const namesCopy2 = [...names];
namesCopy.splice(1, 2, "Bill", "Bob"); //At index/positon 1, remove 2 elements then replece them with 'Bill', 'Bob'
console.log("namesCopy2", namesCopy2); //  ["Danny", "Bill", "Bob", "Molly"];

// names.slice()
const slciedNames = names.slice(1, 3); // slice/cut at index/positon 1 till index 3 (3 not included) and store it a variable (slciedNames)
console.log("slciedNames", slciedNames); //  ["Joe", "Sarah"];

const slciedNames2 = names.slice(1); // slice/cut at index/positon 1 till the end (last index included) and store it a variable (slciedNames2)
console.log("slciedNames2", slciedNames2); //  ["Joe", "Sarah", "Molly"];

// names.indexOf()
const names4 = ["sam", "ali", "sarah", "ali"];
const index = names4.indexOf("ali"); // find first index of 'ali'
console.log("index", index); //  1

const index2 = names4.lastIndexOf("ali"); // find last index of 'ali'
console.log("index", index); //  3

// nums.flat(): to flat/smooth nested array (remove internal brackets) from the main array
let nums = [1, 2, 3, 4, [5, 6], 7];
let flatArr = nums.flat(); // by default flat()= flat(1) which flats 1 nested array level
console.log("flatArr", flatArr); // [1, 2, 3, 4, 5, 6, 7]

let nums2 = [1, 2, 3, 4, [5, 6, [7, 8]], 9];
let flatArr2 = nums2.flat(2); // flat(2) which flats 2 nested array level
console.log("flatArr2", flatArr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// names.forEach():
let count = 0;
names.forEach((name) => {
  count++;
});
console.log("count", count); //5

// for loop
for (let i = 2; i < names.length; i = i + 2) {
  console.log(names[i]);
  // Sarah
  // Joe
}

// nums3.map()
let nums3 = [1, 2, 3, 4, 5, 6];
let doubledNums3 = nums3.map((n) => {
  return n * 2;
});
console.log(doubledNums3); // [2,4,6,8,10,12]
