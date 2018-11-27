// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  //find midpoint (What is relationship between n and level length?)
  const midpoint = Math.floor((2 * n - 1) / 2);
  console.log(midpoint, 'midpoint');

  //iterate through rows
  for (let row = 0; row < n; row++) {
    let level = '';

    //iterate through columns
    for (let column = 0; column < 2 * n - 1; column++) {
      //add a hashtag if the midpoint minus the row is less than or equal to the column AND the midpoint plus row is greater than or equal to the column

      //otherwise add a space

      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

module.exports = pyramid;
