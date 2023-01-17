const orderVeg = require("../katas/order-veg");



describe("The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.", () => {
    test("one vegetable", () => {
        expect( orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4}
        ]) ).toEqual([
            {name: 'Parsnip', type: 'root', quantity: 4}
        ]);
    });

    test("two vegetables in ascending order", () => {
        expect( orderVeg([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Parsnip', type: 'root', quantity: 4},
        ]) ).toEqual([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Parsnip', type: 'root', quantity: 4}
        ]);
    });

    test("two vegetables not in acsending order", () => {
        expect( orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1}
        ]) ).toEqual([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Parsnip', type: 'root', quantity: 4}
        ]);
    });

    test("example", () => {
        expect( orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]) ).toEqual([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]);
    });
})