// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {}

module.exports = vowels;

// function vowels(str) {
//   const vowels = ["a","e","i","o","u"];
//   const split = str.toLowerCase().split("");
//   let count = 0;
//   split.forEach(letter => {
//     vowels.forEach((vLetter => {
//       if(letter === vLetter){
//         count ++;
//       }
//     }))
//   })
//   return count;
// }

//solution 2
// function vowels(str) {
//   const vowels = ["a","e","i","o","u"];
//   const letters = str.toLowerCase().split('');
//   let counter = 0;

//   for (let character of letters) {
//     for (let vowel of vowels) {
//       if (character === vowel) {
//         counter ++
//       }
//     }
//   }
//    return counter;
//  }

//solution 3
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
//  }
