'use strict';
const Stack = require('../stacks-and-queues.js')

describe('stack', () => {
  it('creates an instance' = () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy()
  });
});

describe('push method', () => {
  it('creates and pushes node onto stack', () => {
    let newStack = new Stack();
    newStack.push('Heather');
    expected(newStack).toHaveBeenCalled();
  })
})