/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const digits = String(num).split('');
  
  return digits.reduce((count, digit) => {
    return Number(digit) + count;
  }, 0);
}

module.exports = sumDigits;
