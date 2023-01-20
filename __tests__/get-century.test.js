const getCentury = require("../katas/get-century");

describe("getCentury should take a year as a number and return the century.", () => {
    test("century ending 1 to 3", () => {
        expect( getCentury(38) ).toBe("1st");
        expect( getCentury(123) ).toBe("2nd");
        expect( getCentury(218) ).toBe("3rd");
    });

    test("century ending 4 to 6; year ending 99, 00 and 01", () => {
        expect( getCentury(399) ).toBe("4th");
        expect( getCentury(500) ).toBe("5th");
        expect( getCentury(501) ).toBe("6th");
    });

    test("century ending 7 to 0", () => {
        expect( getCentury(1677) ).toBe("17th");
        expect( getCentury(1777) ).toBe("18th");
        expect( getCentury(1877) ).toBe("19th");
        expect( getCentury(1977) ).toBe("20th");
    });

    test("11th to 13th century special cases", () => {
        expect( getCentury(1050) ).toBe("11th");
        expect( getCentury(1150) ).toBe("12th");
        expect( getCentury(1250) ).toBe("13th");
    });

    test("century ending 1 to 3; bigger number", () => {
        expect( getCentury(2004) ).toBe("21st");
        expect( getCentury(2114) ).toBe("22nd");
        expect( getCentury(2224) ).toBe("23rd");
    });

    test("century ending 4 to 6; bigger number", () => {
        expect( getCentury(2304) ).toBe("24th");
        expect( getCentury(2414) ).toBe("25th");
        expect( getCentury(2524) ).toBe("26th");
    });
    
    test("century ending 1 to 3; much bigger number", () => {
        expect( getCentury(10001) ).toBe("101st");
        expect( getCentury(10101) ).toBe("102nd");
        expect( getCentury(10201) ).toBe("103rd");
    });

    test("century ending 0; much bigger number", () => {
        expect( getCentury(10000) ).toBe("100th");
    });
});