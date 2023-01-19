/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  const words = str.split(' ');
  const wordsWithSplitLetters = words.map( (word) => word.split('') );
  
  let overallIndex = 0;

  for (let i = 0; i < wordsWithSplitLetters.length; i++) {
    const splitWord = wordsWithSplitLetters[i];

    for (let j = 0; j < splitWord.length; j++) {
      overallIndex % 2 ? splitWord[j] = splitWord[j].toLowerCase() : splitWord[j] = splitWord[j].toUpperCase();

      overallIndex++;
    }

    // words with transformed letters
    wordsWithSplitLetters[i] = splitWord.join('');
  }

  return wordsWithSplitLetters.join(' ');
}

module.exports = alternateCase;
