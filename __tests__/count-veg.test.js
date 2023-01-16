const countVeg = require("../katas/count-veg.js");

/*
countVeg
Test cases:

1. Single occurence
countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'leaf') -> 3

2. Multiple occurence:
countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') -> 9

3. Unknown type:
countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'zebra') -> 0

Edge:
[], anything -> 0
[a, b, c], "" -> 0

*/

let vegetables = [
    {name: 'Parsnip', type: 'root', quantity: 4},
    {name: 'Broccoli', type: 'brassica', quantity: 1},
    {name: 'Carrot', type: 'root', quantity: 5},
    {name: 'Onion', type: 'bulb', quantity: 3},
    {name: 'Chard', type: 'leaf', quantity: 3},
    {name: 'Runner beans', type: 'legume', quantity: 8}];

describe("countVeg returns the total quantity of that type of vegetable in the array", () => {
    test("find quantity of single occurence", () => {
        expect( countVeg(vegetables, 'leaf') ).toBe(3);
    });

    test("find quantity of multiple occurence", () => {
        expect( countVeg(vegetables, 'root') ).toBe(9);
    });

    test("return 0 if type is unknown", () => {
        expect( countVeg(vegetables, 'zebra') ).toBe(0);
    });

    test("return 0 if array is empty", () => {
        expect( countVeg([], 'root') ).toBe(0);
    });
})