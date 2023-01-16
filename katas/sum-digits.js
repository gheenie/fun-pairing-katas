/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(str) {
  const chars = String(str).split('');
  
  // a bit uglier tbh, still works
  return chars.reduce( (sum, char) => {
    if ( !isNaN(char) ) {
      sum += parseInt(char);
    }

    return sum;
  }, 0);
}

module.exports = sumDigits;
