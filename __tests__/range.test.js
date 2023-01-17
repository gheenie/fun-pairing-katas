const range = require("../katas/range");

describe("range", () => {
    test("length=0", () => {
        expect( range(0) ).toEqual([])
    });

    test("length=5", () => {
        expect( range(5) ).toEqual([0, 1, 2, 3, 4])
    });

    test("length=5, start=2", () => {
        expect( range(5, 2) ).toEqual([2, 3, 4, 5, 6])
    });

    test("length=5, start=2, step=2", () => {
        expect( range(5, 2, 2) ).toEqual([2, 4, 6, 8, 10])
    });
})