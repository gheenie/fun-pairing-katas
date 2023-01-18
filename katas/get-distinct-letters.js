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

/* string-based version 

function getDistinctLetters(str1, str2) {

  function uniqueLetters(str1, str2) {
    const letters = [];
  
    for( let i = 0; i < str1.length; i++) {
      const letter = str1[i];
  
      if ( !str2.includes(letter) && !letters.includes(letter)) letters.push(letter);
    }
  
    return letters;
  }

  return uniqueLetters(str1, str2).concat( uniqueLetters(str2, str1) ).sort().join('');
}
*/

/* array-based version that utilises .includes()
function getUniqueLetters(str1, str2) {
  return str1.split('').filter( (letter, index, arr) => !str2.includes(letter) && index === arr.indexOf(letter) );
}

function getDistinctLetters(str1, str2) {
  return getUniqueLetters(str1, str2).concat( getUniqueLetters(str2, str1) ).sort().join('');
}
*/

/* Object-based version
Use the following frequency table to filter out non-unique letters
format:
lettersObj = {
  "a": [0, 1],
  "n": [2, 0],
  ...
  _index=1
}

function fillLetters(lettersObj, str) {
  let _index = lettersObj._index;

  str.split('').forEach( function (letter) {
    const letterObj = lettersObj[letter];

    if (letterObj) {
      letterObj[_index] = letterObj[_index]? letterObj[_index]++ : 1;
    } else {
      lettersObj[letter] = Array.of(_index? 0 : 1, _index? 1 : 0);
    }
  });

  lettersObj._index++;
}

function getDistinctLetters(str1, str2) {
  let lettersObj = { _index: 0 };

  fillLetters(lettersObj, str1);
  fillLetters(lettersObj, str2);

  const uniqueEntries = Object.entries(lettersObj).filter( ([key, arr]) => key.length === 1 && !(arr[0] && arr[1]) );

  return uniqueEntries.map( ([key, arr]) => key ).sort().join('');
}
*/