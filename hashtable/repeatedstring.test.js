const word = require('./repeated-word');

describe('repeated word function', () => {
    it('takes a string', () => {
        let str = 'meow';
        let result = word.repeatedWord(str);
        expect(result).toBeTruthy;
    });
})