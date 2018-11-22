// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const split = str.split(' ');
  const result = [];

  for (let char of split) {
    result.push(char[0].toUpperCase() + char.slice(1));
  }

  return result.join(' ');
}

module.exports = capitalize;
