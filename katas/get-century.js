/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  let century = Math.floor(year / 100) + 1;
  let centuryStr = String(century);
  let key = 0;

  const suffixes = {
    "0": "th",
    "1": "st",
    "2": "nd",
    "3": "rd"
  };

  if (century > 5 && century < 21) key = "0";
  else key = centuryStr.slice(-1);

  return centuryStr + suffixes[key];
}

module.exports = getCentury;
