/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

function getCentury(year) {
  let century = Math.floor(year / 100) + 1;
  const suffixes = {
    "0": "th",
    "1": "st",
    "2": "nd",
    "3": "rd"
  };

  return century + suffixes[ century > 5 && century < 21? "0" : String(century).slice(-1) ];
}

module.exports = getCentury;
