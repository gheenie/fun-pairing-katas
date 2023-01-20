const removeDuplicates = require('../katas/remove-duplicates');

describe('', () => {
    test('one item', () => {
        expect( removeDuplicates([1]) ).toEqual([1]);
    });

    test('multiple items', () => {
        expect( removeDuplicates([1, 2]) ).toEqual([1, 2]);
    });

    test('multiple items; one duplicate', () => {
        expect( removeDuplicates([1, 2, 1]) ).toEqual([1, 2]);
    });

    test('multiple items; one duplicate; different data types', () => {
        expect( removeDuplicates(['a', 2, 'b', 3, 'b', '2']) ).toEqual(['a', 2, 'b', 3, '2']);
    });

    test('empty array', () => {
        expect( removeDuplicates([]) ).toEqual([]);
    });

    test('one item; object', () => {
        expect( removeDuplicates([{name: 'a'}]) ).toEqual([{name: 'a'}]);
    });

    test('two items; one duplicate; object', () => {
        const a = {name: 'a'};
        const anotherA = {name: 'a'};

        expect( removeDuplicates([a, a]) ).toEqual([a]);
        expect( removeDuplicates([a, anotherA]) ).toEqual([anotherA]);
    });
});
