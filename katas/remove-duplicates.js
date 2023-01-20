/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(arr) {
  // Function works best for primitives, not objects.

  const results = [];

  arr.forEach( function(item) {
    if ( typeof item !== 'object' && !results.includes(item) ) {
      results.push(item);
    }

    if (typeof item === 'object') {
      let isUnique = true;
      
      results.forEach( (result) => {
        if ( JSON.stringify(item) === JSON.stringify(result) ) {
          isUnique = false;
        }
      } );

      if (isUnique) results.push(item);
    }
  } );

  return results;
}

module.exports = removeDuplicates;
