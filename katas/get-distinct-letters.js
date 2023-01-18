/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(str1, str2) {
  const letterSource = {};

  for (let i = 0; i < str1.length; i++) {
    if (!letterSource.hasOwnProperty( str1[i] )) {
      letterSource[ str1[i] ] = 'str1';
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!letterSource.hasOwnProperty( str2[i] )) {
      letterSource[ str2[i] ] = 'str2';
    } else if (letterSource[ str2[i] ] === 'str1') {
      delete letterSource[ str2[i] ];
    }
  }

  return Object.keys(letterSource).sort().join('');
}

module.exports = getDistinctLetters;

/*
// array-based version
function getDistinctLetters(str1, str2) {
  const lettersArr = str1.concat(str2).split('');

  return lettersArr.filter( (letter, i, arr) => arr.indexOf(letter) === arr.lastIndexOf(letter) ).sort().join('');
}

// string-based version
function getDistinctLetters(str1, str2) {
  const combinedStr = str1.concat(str2);
  const resArr = [];

  for( let i=0; i < combinedStr.length; i++) {
    let letter = combinedStr[i];

    if ( combinedStr.indexOf(letter) === combinedStr.lastIndexOf(letter) ) {
      resArr.push(letter);
    }
  }

  return resArr.sort().join('');
}

// Object-based version
function getDistinctLetters(str1, str2) {
  const letterFreq = {};
  const resArr = [];

  str1.concat(str2).split('').forEach( function(letter) {
    letterFreq[letter] = letterFreq.hasOwnProperty(letter) ? letterFreq[letter] + 1 : 1;
  });

  for( const [letter, quantity] of Object.entries(letterFreq) ) {
    if (1 === quantity) {
      resArr.push(letter);
    }
  }

  return resArr.sort().join('');
}
*/

/*
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
*/
