// When we create a string that string will have access to string properties and methods
let course = "JavaScript is cool";
const strLength = course.length; // returns numbers of chars including spaces => 18

let course2 = "  JavaScript is amazing  ";
const trimStr = course2.trim(); // trims/removes white spaces from start and end of str (doesn't work on spaces in the middle of string) and store it in trimStr => JavaScript is amazing

const upperCaseStr = course.toUpperCase(); // returns a string in all caps => JAVASCRIPT IS COOL
const lowerCaseStr = course.toLowerCase(); // returns a string in all lower case => javascript is cool

const fisrtA = course.indexOf("a"); // finds and returns an index (position) of first char 'a' in a string => 1
const lastA = course.lastIndexOf("a"); // finds and returns an index (position) of first char 'a' in a string => 3

const slicedStr = course.slice(0, 10); // slice/cut a string from index 0 to index 10 (index 10 not incudes) and store it in slicedStr => JavaScript

let course3 = "JavaScript is not cool";
const replacedStr = course3.replace("not", "so"); // find a word 'not and replace it with word 'so' then store the result in replacedStr => JavaScript is so cool

const char = course.charAt(4); // finds a char at index 4 in course then store result in char => S
