/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let res = "";
  // convert string into array to iterate over its elements
  let chars = str.split('');

  chars.forEach( (char, index) => {
    res += index % 2? char.toLowerCase() : char.toUpperCase();
  });

  return res;
}

module.exports = alternateCase;
