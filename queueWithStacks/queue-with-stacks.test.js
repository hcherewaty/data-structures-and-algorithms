'use strict';

const queue = require('./queue-with-stacks.js');
const stack = require('../stacks_and_queues/stacks-and-queues.js')

describe('enqueue method', () => {
    it('adds two stacks to queue', () => {
        let newStack = new Stack();
        newStack.push('1')
        newStack.push('2')
        expect(newStack).toEqual(['1', '2']);
    });
});