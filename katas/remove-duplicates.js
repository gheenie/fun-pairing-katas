/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(arr) {
  // Function works best for primitives, not objects.

  const res = [];

  arr.forEach(function(item) {
    if ( !res.includes(item) ) {
      res.push(item);
    }
  });

  return res;
}

module.exports = removeDuplicates;
