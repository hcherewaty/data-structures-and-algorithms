const binaryArray = require('./array-binary-search.js');

describe('Array', () => {
    it('tests if index is equal to value', () => {
        let result = binaryArray.binarySearch(['a','b','c'], 'c');
        expect(result).toEqual('2');
    });
    it('tests if index is not equal to value', () => {
        let result = binaryArray.binarySearch(['a','b','c'], 'x');
        expect(result).toEqual(-1);
    });
});