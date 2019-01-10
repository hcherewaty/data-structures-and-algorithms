'use strict';

const mbv = require('./multi-bracket-validation.js');

describe('multiBracketValidation()' , () => {
  it('should accept a string and return true if brackets balance', () => {
      let expected = mbv.multiBracketValidation('[]');
    expect(expected).toBe(true);
  });

  it('should return false when given imbalanced brackets', () => {
    let expected = mbv.multiBracketValidation('[p{');
    expect(expected).toBe(false);
  });
});