// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const split = str.split('');
  let high = 0;
  let highChar = '';
  const charReducer = split.reduce((charReducer, char) => {
    if (!charReducer[char]) {
      charReducer[char] = 1;
    } else {
      charReducer[char]++;
    }
    return charReducer;
  }, {});

  for (let char in charReducer) {
    if (charReducer[char] > high) {
      high = charReducer[char];
      highChar = char;
    }
  }

  return highChar;

  return charReducer;
}

module.exports = maxChar;
