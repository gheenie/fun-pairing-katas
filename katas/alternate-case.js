/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let res = "";

  for( let i = 0; i < str.length; i++) {
    res += i % 2? str[i].toLowerCase() : str[i].toUpperCase();
  }
  //return str[0].toUpperCase();
  return res;
}

module.exports = alternateCase;
