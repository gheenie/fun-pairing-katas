/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

<<<<<<< HEAD
function sumDigits(num) {
  const digits = String(num).split('');
  
  return digits.reduce((count, digit) => {
    return Number(digit) + count;
=======
function sumDigits(str) {
  const chars = String(str).split('');
  
  // a bit uglier tbh, still works
  return chars.reduce( (sum, char) => {
    if ( !isNaN(char) ) {
      sum += parseInt(char);
    }

    return sum;
>>>>>>> c1b678e0e2dc450de875bbd6c30efee5cf30890e
  }, 0);
}

module.exports = sumDigits;
