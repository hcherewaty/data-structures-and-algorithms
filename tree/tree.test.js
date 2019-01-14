'use strict';
const Tree = require('./tree.js')

describe('Binary Tree', () => {
  it('creates an instance', () => {
    let tree = new Tree.BinaryTree();
    expect(tree instanceof Tree.BinaryTree).toBeTruthy()
  });
});

describe('Binary Search Tree', () => {
    it('creates an instance', () => {
      let tree = new Tree.BinarySearchTree();
      expect(tree instanceof Tree.BinarySearchTree).toBeTruthy()
    });

    it('adds a value', () => {
        let tree = new Tree.BinarySearchTree();
        let expected = tree.add('1');
        expect(expected).toEqual({"root": {"left": null, "right": null, "value": "1"}});
    });

    it('contains a value', () => {
        let tree = new Tree.BinarySearchTree();
        tree.add('1');
        let expected = tree.contains('1')
        expect(expected).toBeTruthy();
    })
  });
