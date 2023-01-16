const getCentury = require("../katas/get-century");

/*
TODO:
100 to 10000

1877 -> 19th
1999 -> 20th
2004 -> 21st
3105 -> 32nd
5298 -> 53rd
7318 -> 74th
*/

describe("getCentury should take a year as a number and return the century.", () => {
    test("38 -> 1st", () => {
        expect( getCentury(38) ).toBe("1st");
    });

    test("123 -> 2nd", () => {
        expect( getCentury(123) ).toBe("2nd");
    });

    test("218 -> 3rd", () => {
        expect( getCentury(218) ).toBe("3rd");
    });

    test("512 -> 6th", () => {
        expect( getCentury(512) ).toBe("6th");
    });

    test("1100 -> 12th", () => {
        expect( getCentury(1100) ).toBe("12th");
    });

    test("1877 -> 19th", () => {
        expect( getCentury(1877) ).toBe("19th");
    });

    test("1974 -> 20th", () => {
        expect( getCentury(1974) ).toBe("20th");
    });
    
    test("2004 -> 21st", () => {
        expect( getCentury(2004) ).toBe("21st");
    });
    
    test("10000 -> 101st", () => {
        expect( getCentury(10000) ).toBe("101st");
    });
});