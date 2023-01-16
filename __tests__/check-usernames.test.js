const checkUsernames = require("../katas/check-usernames");

/* TODO

["abc"] -> false
["abcde", "abcdef"] -> true
["abcde", "abcdefghijklmnopqrstu"] -> false
["User"] -> false
["abc2de", "abc_def"] -> true
["abc2de", "abC def"] -> true

*/

describe("checkUsernames takes an array of usernames and returns true if they are all valid and false otherwise", () => {
    test("at least 5 characters long", () => {
        expect( checkUsernames(["abc", "abcdef"])).toBe(false);
    });

    test("at least 5 characters long", () => {
        expect( checkUsernames(["abcde", "abcdef"])).toBe(true);
    });

    test("no longer than 20 characters", () => {
        expect( checkUsernames(["abcde", "abcdefghijklmnopqrstu"])).toBe(false);
    });

    test("only contains lowercase letters, numbers and underscores", () => {
        expect( checkUsernames(["User"])).toBe(false);
    });

    test('["abc2de", "abc_def"] -> true', () => {
        expect( checkUsernames(["abc2de", "abc_def"])).toBe(true);
    });

    test('["abc2de", "abC def"] -> false', () => {
        expect( checkUsernames(["abC def", "abc_def"])).toBe(false);
    });
})