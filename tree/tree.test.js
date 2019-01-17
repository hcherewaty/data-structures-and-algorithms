'use strict';
const Tree = require('./tree.js')

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

describe('Binary Tree', () => {
  it('creates an instance', () => {
    let tree = new Tree.BinaryTree();
    expect(tree instanceof Tree.BinaryTree).toBeTruthy()
  });

  it('can traverse breadth first', () => {
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
    expect(tree.bsf()).toEqual(['10','6','5','15','8','2'])
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
    });

    it('contains a max value', () => {
      let tree = new Tree.BinaryTree();
      let a = new Node('7');
      let b = new Node('6');
      let c = new Node('5');
      let d = new Node('1');
      let e = new Node('8');
      let f = new Node('2');
  
      a.left = b;
      a.right= c;
      c.left = f;
      b.left = d;
      b.right = e;
      tree.root = a;
      let expected = tree.maxValue();
      expect(expected).toEqual('8');
  })
  });
