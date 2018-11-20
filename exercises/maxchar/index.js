// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = '';

  const split = str.split('');
  split.reduce((stringCounter, char) => {
    if (!stringCounter[char]) {
      stringCounter[char] = 1;
    } else {
      stringCounter[char]++;
    }
    if (stringCounter[char] > max) {
      max = stringCounter[char];
      maxChar = char;
    }
    return stringCounter;
  }, {});

  return maxChar;
}

//do solution with for of

module.exports = maxChar;
