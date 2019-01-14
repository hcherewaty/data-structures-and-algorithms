'use strict';

const util = require('util');

const Tree = require('../tree/tree');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function fizzBuzzTree(tree){
    const _walk = (node) => {
        if(node.left) {
            _walk(node.left);
        }
        if(node.right) {
            _walk(node.right);
        }
        if(node.value % 15 === 0) {
            node.value = "FizzBuzz";
        }
        if(node.value % 5 === 0) {
            node.value = "Buzz";
        }
        if(node.value % 3 === 0) {
            node.value = "Fizz"
        }
    }
    _walk(tree.root);
    return tree;
}

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


// console.log(util.inspect(tree, {depth: 10}));

console.log(fizzBuzzTree(tree));

// console.log(util.inspect(fizzBuzzTree(tree), {depth: 10}));

module.exports = {fizzBuzzTree};