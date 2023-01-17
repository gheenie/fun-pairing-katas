/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

const removeDuplicates = require('../katas/remove-duplicates');

function getUnique(str1, str2) {
  let res = [];

  for( let i = 0; i < str2.length; i++) {
    if ( !str1.includes( str2[i] ) ) {
      res.push( str2[i] );
    }
  }

  return res;
}

function getDistinctLetters(str1, str2) {
  const oneWay = getUnique(str1, str2);
  const theOtherWay = getUnique(str2, str1);

  return removeDuplicates( oneWay.concat(theOtherWay) ).sort().join("");
}

module.exports = getDistinctLetters;
