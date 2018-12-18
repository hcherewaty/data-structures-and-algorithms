'use strict';

const shiftArr = require('./array-shift.js');

describe('Array', () => {
    it('tests array when given odd numbers', () => {
        let result = shiftArr.insertShiftArray([1,2,3], 'x');
        expect(result).toEqual([1,2,'x', 3]);
    });
    it('tests array when given even numbers', () => {
        let result = shiftArr.insertShiftArray([1,2,3,4], 'x');
        expect(result).toEqual([1,2,'x',3,4]);
    });
    it('tests if something other than array is given', ()=> {
        let result = shiftArr.insertShiftArray('x', 'x');
        expect(result).toBeNull();
    });
    it('tests if 2 params are given', () => {
        let result = shiftArr.insertShiftArray([1,2]);
        expect(result).toBeNull();
    })
});