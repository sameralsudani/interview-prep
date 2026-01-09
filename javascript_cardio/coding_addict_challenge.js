// Find longest word
function longestWord(str) {
    let words= str.split(' ');
    let longestWord= '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord=word
            
        }
    }

    return longestWord
}

console.log(longestWord('I wok up early today')) // early


/////////////////////////////
function mathSequences(arr) {
    let arith = new Set();
    let geo = new Set();

    for (let i = 1; i < arr.length; i++) {
        let number1= arr[i] - arr[i-1];
        arith.add(number1);

        let number2= arr[i] / arr[i-1];
        geo.add(number2)
    }
    if (arith.size ===1) {
        return "Arithmetic"
    }
    if (geo.size ===1) {
        return "Geometric"
    }

    return -1 

}

console.log(mathSequences([2,4,6,8]))  // Arithmetic
console.log(mathSequences([3,9,27]))  // Geometric
console.log(mathSequences([2,5,14, 89]))  // -1

console.log(mathSequences([10,20,30,40]))  // Arithmetic
console.log(mathSequences([2,4,8,16]))  // Geometric
console.log(mathSequences([1,5,6, 89]))  // -1

/////////////////////////////
// Return true only if all values are unique, otherwise false
function unique(str) {
    let values=[];
    for (let letter of str) {
        if (values.indexOf(letter) !== -1) {
            return false
        }
    }
    return true
}

console.log(unique('abcde'))  // true
console.log(unique('abcdeab'))  // false


/////////////////////////////////
// Count Repeating Letters
function countLetters(str) {
    let tempArr = str.split('');
    let letters = [];
    let count = 1;

    for (let i = 0; i < array.length; i++) {
        if (tempArr[i] === temp[i+1]) {
            count++
        } else {
            let value= `${count}${tempArr[i]}`;
            letters= [...letters, value];
            count=1

        }
        
    }
    return letters.join('')
}

console.log(countLetters('ffffeerttttooo'))  // 4f2e1r4t3o


///////////////////////
// return true if the number is Prime otherwise false 
// Prime number can only be divided by itself or o 1 evenly (always remainder)
// ex: 11 % 2 = 0 // 1
// ex: 11 % 3 = 2 //  2
// ex: 11 % 4 = 2 //  3
// 11 is prime (always remainder)

// ex: 8 % 2 = 0 // 0
// ex: 8 % 3 = 2 //  2
// ex: 8 % 4 = 2 //  0
// 11 is not prime (not always remainder)

function isPrime(num) {
    if (num < 2) {
        return false
    }
    // Modulus %
    for (let i = 2; i < num; i++) {
        if (num % i ===0) {
            return false
        }        
    }

    return true
}

console.log(isPrime(8)) // false
console.log(isPrime(11)) // true


// Array Sum: check if all array numbers summed up are equal to the largest number in the array
//return true if 1+2+4+6= 13
function arraySum(arr) {
    let tempArr =  arr.sort((a,b)=>{
        return a-b
    })

    let largest= tempArr.pop();

    let number = 0;
    tempArr.array.forEach(item => {
        number += item
    });

    return largest === number
}

console.log(arraySum([1,6,4,2,13]))  // true
console.log(arraySum([1,2,4,34,22]))  // false