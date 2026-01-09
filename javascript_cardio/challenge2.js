// Write a javaScrpit program to check two numbers and return true if one of the numbers is a 100 or if the sum of the two numbers is 100
const isEqualTo100 = (a, b) => {
    a === 100 || b === 100 || a + b === 100;
  };
  
  console.log(isEqualTo100(100, 0)); // true
  console.log(isEqualTo100(0, 100)); // true
  
  console.log(isEqualTo100(10, 0)); // false
  console.log(isEqualTo100(0, 10)); // false
  
  console.log(isEqualTo100(20, 80)); // true
  console.log(isEqualTo100(80, 20)); // true
  
  // Write a javaScript program to get the extension of a filename.
  const getFileExtension = (str) => {
    str.slice(str.lastIndexOf("."));
  };
  
  console.log(getFileExtension("index.html")); // .html
  console.log(getFileExtension("webpack.config.js")); // .js
  
  // Write a javaScript program to replace every character in a given string with the character following it in the alphabet
  const moveCharsForward = (str) =>
    str
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
      .join("");
  
  console.log(moveCharsForward("abcd")); // bcde
  
  // Write a javaScript program to get the current date.
  // expected output:
  // mm-dd-yyyy or mm/dd/yyyy or dd-mm-yyyy or dd/mm/yyyy
  const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear() + 1;
    return `${days}/${months}/${years}`;
  };
  
  console.log(formatDate()); // 13/2/2019
  
  // Write a javaScript program to create a new string adding 'New!' in front of a given string. if the given string begins with 'New!' already then return the original string
  const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
  
  console.log(addNew("Offers")); // New! Offers
  console.log(addNew("New! Offers")); // New! Offers
  
  // Write a javaScript program to remove duplicate words and leave first once
  function removeDuplicateWords(str) {
    return [...new Set(str.split(" "))].join(" ");
  }
  
  console.log(removeDuplicateWords("alpha beta beta gamma gamma alpha")); // alpha beta gamma
  
  // Write a javaScript program to remove every other element (even elements) from  an array
  function removeEveryOther(arr) {
    return arr.filter((_, idx) => idx % 2 === 0);
  }
  console.log(removeEveryOther([1, 4, 8, 6, 7])); // [1,8,7]
  
  // Write a javaScrpit program to count charecters in your string
  function count(str) {
    const count = {};
    str.split(" ").forEach((char) => {
      count[char] = count[char] ? count[char] + 1 : 1;
    });
    return count;
  }
  console.log(count("aba")); // {a:2, b:1}
  
  // Write a javaScrpit program to add two number the convert the result into binary
  function addBinary(a, b) {
    return (a + b).toString(2);
  }
  console.log(addBinary(1, 2)); // 11
  
  // Write a javaScrpit program to find numbers whick are divisible by a given number
  function divisibleBy(numbers, divisor) {
    return numbers.filter((num) => num % divisor === 0);
  }
  console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); //  [2,4,6]
  
  // Write a javaScrpit program to extract the first half of a string of even length
  const firstHalf = (str) => str.slice(0, str.length / 2);
  
  console.log(firstHalf("temp")); // te
  console.log(firstHalf("temple")); // tem
  console.log(firstHalf("temples")); // tem
  
  // Write a javaScrpit program to concatenate two strings except their first character
  const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);
  console.log(concatenate("abc", "def")); // bcef
  
  // Write a javaScrpit program to find out which one is nearest to 100
  const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);
  console.log(closeTo100(99, 1)); // 99
  console.log(closeTo100(49, 51)); // 51