const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.", () => {
    test("no distinct letters", () => {
        expect( getDistinctLetters("e", "e") ).toBe("");
    });

    test('distinct letter from second word', () => {
        expect( getDistinctLetters("e", "ea") ).toBe("a");
    });

    test('distinct letter from first word', () => {
        expect( getDistinctLetters("ea", "e") ).toBe("a");
    });

    test('distinct but multiple letter from first word', () => {
        expect( getDistinctLetters("eaa", "e") ).toBe("a");
    });

    test('distinct letter from both words, multiple from first', () => {
        expect( getDistinctLetters("eaa", "ie") ).toBe("ai");
    });

    test('"hello", "worldo" -> "dehrw"', () => {
        expect( getDistinctLetters("hello", "worldo") ).toBe("dehrw");
    });
})