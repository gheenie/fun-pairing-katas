/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

function getCentury(year) {
  const isTurnOfCentury = String(year).endsWith('00');
  if (isTurnOfCentury) {
    year -= 1;
  }

  const century = Math.floor(year / 100) + 1;
  const suffixes = {
    "0": "th",
    "1": "st",
    "2": "nd",
    "3": "rd",
    "4": "th",
    "5": "th",
    "6": "th",
    "7": "th",
    "8": "th",
    "9": "th",
    "11": "th",
    "12": "th",
    "13": "th",
  };
  const centuryEndDigit = century % 10;

  if (century >= 11 && century <=13) {
    return century + suffixes[century];
  }

  return century + suffixes[centuryEndDigit];
}

module.exports = getCentury;
