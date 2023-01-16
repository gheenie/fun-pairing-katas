/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(arr) {
  // console.log(`arr: ${arr}`);
  return arr.every( (username) => {
    // console.log(`username: "${username}"`);

    return username.length > 4 && username.length < 21;
  })
}

module.exports = checkUsernames;
