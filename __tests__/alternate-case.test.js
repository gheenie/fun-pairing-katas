const alternateCase = require("../katas/alternate-case.js");

describe("Return every other letter either capital or lower case, starting with a capital letter.", () => {
    test("return a capitalised character if passed one character", () => {
        expect( alternateCase("a") ).toBe("A");
    });

    test("two letter string", () => {
        expect( alternateCase("aB") ).toBe("Ab");
    });

    test("three letter string", () => {
        expect( alternateCase("abc") ).toBe("AbC");
    });

    test("strings with spaces", () => {
        expect( alternateCase("hello wor ld") ).toBe("HeLlO wOr Ld");
    });

    test("empty string", () => {
        expect( alternateCase("") ).toBe("");
    });
})
