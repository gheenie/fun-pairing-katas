const areOrdered = require("../katas/are-ordered");

/* TODO

[] -> false
[1] -> true
[1, 2] -> true
[1, 2, 2] -> false
[1, 3, 5, 2] -> false
[1, 3, 5, 7, 8] -> true
*/

describe("The function takes an array of numbers as an input and returns true if all the numbers are in ascending order and false if they are not", () => {
    test("[] -> false", () => {
        expect( areOrdered([]) ).toBe(false);
    });

    test("[1] -> true", () => {
        expect( areOrdered([1]) ).toBe(true);
    });

    test("[1, 2] -> true", () => {
        expect( areOrdered([1, 2]) ).toBe(true);
    });

    test("[1, 2, 2] -> false", () => {
        expect( areOrdered([1, 2, 2]) ).toBe(false);
    });

    test("[1, 3, 5, 7, 8] -> true", () => {
        expect( areOrdered([1, 3, 5, 7, 8]) ).toBe(true);
    });
})