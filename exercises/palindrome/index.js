// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution 1: reverse/split
// function palindrome(str) {
//   const split = str.split('');
//   const reversed = split.reverse().join('');
// return str === reversed;
// }

//solution 2: for/of
function palindrome(str) {
  let reversed = '';
  for (character of str) {
    reversed = character + reversed;
    return reversed;
  }
  console.log(reversed);
  return reversed;
}

module.exports = palindrome;
