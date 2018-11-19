// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 1: reverse/split
// function reverse(str) {
//   const split = str.split('');
//   const reverse = split.reverse().join('');
//   return reverse;
// }

//solution 2: for/of
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

//solution 3: Reduce
// function reverse(str) {
//   const split = str.split('');
//   const reversed = split.reduce((reversed, char) => {
//     return char + reversed;
//   }, '');
//   return reversed;
// }

module.exports = reverse;
