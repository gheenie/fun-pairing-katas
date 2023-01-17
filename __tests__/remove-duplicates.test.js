const removeDuplicates = require('../katas/remove-duplicates');

describe('', () => {
    test('one element array', () => {
        expect(removeDuplicates([1])).toEqual([1]);
    });

    test('two element array', () => {
        expect(removeDuplicates([1, 2])).toEqual([1, 2]);
    });

    test('three element array, one duplicate', () => {
        expect(removeDuplicates([1, 2, 1])).toEqual([1, 2]);
    });

    test('six element array, one duplicate', () => {
        expect(removeDuplicates(['a', 2, 'b', 3, 'b', '2'])).toEqual(['a', 2, 'b', 3, '2']);
    });

    test('empty array', () => {
        expect(removeDuplicates([])).toEqual([]);
    });

    test('one object array', () => {
        expect(removeDuplicates([{name: 'a'}])).toEqual([{name: 'a'}]);
    });

    test('two object array, one duplicate', () => {
        let a = {name: 'a'};

        expect(removeDuplicates([a, a])).toEqual([a]);
    });
});
