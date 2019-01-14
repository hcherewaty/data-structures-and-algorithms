'use strict';
const Tree = require('../tree/tree');
const BT = require('./fizz-buzz-tree.js')

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

describe('fizzBuzzTree()', () => {
  it('returns a tree', () => {
    let tree = new Tree.BinaryTree();
    let a = new Node('10');
    let b = new Node('6');
    let c = new Node('5');
    let d = new Node('15');
    let e = new Node('8');
    let f = new Node('2');

    a.left = b;
    a.right= c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    let expected = BT.fizzBuzzTree(tree);
    expect(expected).toEqual({"root": {"left": {"left": {"left": null, "right": null, "value": "FizzBuzz"}, "right": {"left": null, "right": null, "value": "8"}, "value": "Fizz"}, "right": {"left": {"left": null, "right": null, "value": "2"}, "right": null, "value": "Buzz"}, "value": "Buzz"}});
  });
});