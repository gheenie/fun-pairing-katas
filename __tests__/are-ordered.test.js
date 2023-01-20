const areOrdered = require("../katas/are-ordered");

describe("The function takes an array of numbers as an input and returns true if all the numbers are in ascending order and false if they are not", () => {
    test("empty array", () => {
        expect( areOrdered([]) ).toBe(false);
    });

    test("one item", () => {
        expect( areOrdered([1]) ).toBe(true);
    });

    test("multiple items; ordered", () => {
        expect( areOrdered([1, 2]) ).toBe(true);
        expect( areOrdered([1, 3, 5, 7, 8]) ).toBe(true);
    });

    test("multiple items; unordered", () => {
        expect( areOrdered([2, 1]) ).toBe(false);
        expect( areOrdered([8, 1, 3]) ).toBe(false);
    });

    test("multiple items; ordered; some same numbers", () => {
        expect( areOrdered([1, 2, 2]) ).toBe(true);
    });
    
    test("multiple items; unordered; some same numbers", () => {
        expect( areOrdered([2, 1, 2]) ).toBe(false);
    });

    test("multiple items; ordered; different number of digits", () => {
        expect( areOrdered([1, 3, 5, 17, 28]) ).toBe(true);
        expect( areOrdered([1, 3, 5, 14, 23]) ).toBe(true);
    });

    test("multiple items; unordered; different number of digits", () => {
        expect( areOrdered([1, 17, 3, 5, 28]) ).toBe(false);
        expect( areOrdered([1, 23, 5, 3, 14]) ).toBe(false);
    });
})
