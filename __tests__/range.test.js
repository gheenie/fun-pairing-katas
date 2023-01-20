const range = require("../katas/range");

describe("range", () => {
    test("0 length", () => {
        expect( range(0) ).toEqual([])
    });

    test("non-0 length", () => {
        expect( range(5) ).toEqual([0, 1, 2, 3, 4])
    });

    test("start also specified", () => {
        expect( range(5, 2) ).toEqual([2, 3, 4, 5, 6])
    });

    test("step also specified", () => {
        expect( range(5, 2, 2) ).toEqual([2, 4, 6, 8, 10])
    });
})