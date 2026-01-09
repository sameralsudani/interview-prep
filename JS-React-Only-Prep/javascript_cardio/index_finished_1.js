// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');

  //or
  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

}
reverseString('hello') // 'olleh'

//////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;
  
}
isPalindrome('racecar') // true

///////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}
reverseInt(521)// 125

///////////////

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') => 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');

}
capitalizeLetters('i love javascript') // 'I Love Javascript'


/////////////////

// CHALLENGE 5: MAX CHARACTER = most common in a string
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxCharacter('javascript')// 'a'


///////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(var i = 1; i <= 100; i++) {
    let output = '';
    if(i % 3 === 0) {
      output += 'fizz';
    }
    if(i % 5 === 0) {
      output += 'buzz';
    }
    console.log(output || i);
  }
}

// Call Function
const output = fizzBuzz();
console.log(output);

