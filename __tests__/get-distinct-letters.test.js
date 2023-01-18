const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.", () => {
    test("two characters, identical", () => {
        expect( getDistinctLetters("e", "e") ).toBe("");
    });

    test('"e", "ea" -> "a"', () => {
        expect( getDistinctLetters("e", "ea") ).toBe("a");
    });

    test('"ea", "e" -> "a"', () => {
        expect( getDistinctLetters("ea", "e") ).toBe("a");
    });

    // the description is wrong, please refer to the test.toBe
    test('"eaa", "e" -> "a"', () => {
        expect( getDistinctLetters("eaa", "e") ).toBe("");
    });

    // the description is wrong, please refer to the test.toBe
    test('"eaa", "ie" -> "ai"', () => {
        expect( getDistinctLetters("eaa", "ie") ).toBe("i");
    });

    test('"hello", "world" -> "dehrw"', () => {
        expect( getDistinctLetters("hello", "world") ).toBe("dehrw");
    });
})