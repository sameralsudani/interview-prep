// turn an Object into an Array []
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]
// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]
// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]

/////////////////////////////
// Write the code to find the vowels
const findVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(findVowels('samer')) // 2

////////////////////////
// Five ways to clone arrays in JavaScript
const clone = (arr) => arr.slice(0);
const clone2 = (arr) => [...arr];
const clone3 = (arr) => Array.from(arr);
const clone4 = (arr) => arr.map((x) => x);
const clone5 = (arr) => arr.concat([]);

/////////////////////////////
// Five ways to clone objects in JavaScript
const user = {
  name: 'Yonas',
  gae: 25,
}

const user2 = {
  ...user
}

const user3= JSON.parse(JSON.stringify(user))

const user4= Object.assign({}, user)


/////////////////////////////////
Number.isInteger(2.6);   // false
Number.isInteger(-19);   // true

Number.parseInt('6.8');   // 6
Number.parseInt('141x');   // 141

Number.parseFloat('5.86')   // 5.86
Number.parseFloat('-11.59x')   // -11.59

Number.isNaN(NaN)    // true
Number.isNaN('text', -22)    // true
Number.isNaN('text')    // false

56.369.toFixed(2)   // 56.37
59..toFixed(3)   // 59.000

32.458.toPrecision('3')   // 32.5
