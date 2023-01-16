const alternateCase = require("../katas/alternate-case.js");

/*
TODO:
"a" -> "A"
"aB" -> "Ab"
"abc" -> "AbC"
"abc e" -> "AbC E"
"" -> ""
*/

describe("Return every other letter either capital or lower case, starting with a capital letter.", () => {
    test("return a capitalised character if passed one character", () => {
        expect( alternateCase("a") ).toBe("A");
    });

    test("return Ab on aB", () => {
        expect( alternateCase("aB") ).toBe("Ab");
    });

    test("return AbC on abc", () => {
        expect( alternateCase("abc") ).toBe("AbC");
    });

    test("return 'AbC E' on 'abc e'", () => {
        expect( alternateCase("abc e") ).toBe("AbC E");
    });

    test("return '' on ''", () => {
        expect( alternateCase("") ).toBe("");
    });
})