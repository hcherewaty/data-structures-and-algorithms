'use strict';
const Stack = require('../stacks-and-queues.js')

describe('stack', () => {
  it('creates an instance' = () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy()
  });
});