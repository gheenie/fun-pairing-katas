const checkUsernames = require("../katas/check-usernames");

/* TODO

["abcde", "abcdef"] -> true
*/

describe("checkUsernames takes an array of usernames and returns true if they are all valid and false otherwise", () => {
    test("least 5 characters long", () => {
        expect( checkUsernames(["abcde", "abcdef"])).toBe(true);
    });
})