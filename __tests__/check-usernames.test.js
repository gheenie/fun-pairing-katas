const checkUsernames = require("../katas/check-usernames");

describe("checkUsernames takes an array of usernames and returns true if they are all valid and false otherwise", () => {
    test("some items < 5 chars; short by 1", () => {
        expect( checkUsernames(["abcd", "abcdef"]) ).toBe(false);
    });

    test("all items >= 5 characters; some exactly 5", () => {
        expect( checkUsernames(["abcde", "abcdef"]) ).toBe(true);
    });

    test("some items > 20 characters; longer by 1", () => {
        expect( checkUsernames(["abcde", "abcdefghijklmnopqrstu"]) ).toBe(false);
    });

    test("all items <= 20 characters, some exactly 20", () => {
        expect( checkUsernames(["abcde", "abcdefghijklmnopqrst"]) ).toBe(true);
    });

    test('numbers and underscores; length valid', () => {
        expect( checkUsernames(["12_45", "a_345678901234567890"]) ).toBe(true);
    });

    test("uppercase letters; length valid", () => {
        expect( checkUsernames(["Abcde", "12345678901234567890"]) ).toBe(false);
    });

    test('various invalid characters', () => {
        expect( checkUsernames(["abC def", "abc_def"]) ).toBe(false);
    });
})
