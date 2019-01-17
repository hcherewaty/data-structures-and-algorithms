'use strict';

const Thing = require('../stacks_and_queues/stacks-and-queues');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor(){
        this.root = null;
    }

    preOrder(){
        let nodes = [];

        let _walk = (node) => {
            nodes.push(node.value);
            if( node.left) {
                _walk(node.left);
            }
            if(node.right) {
                _walk(node.right);
            }
            _walk(this.root);
            return nodes;
        }
    }

    inOrder() {
        let nodes = [];
        
        let _walk = (node) => {
            if(node.left) {
                _walk(node.left);
            }

            nodes.push(node.value);

            if(node.right) {
                _walk(node.right);
            }
            _walk(this.root);
            return nodes;
        }
    }

    postOrder() {
        let nodes = [];

        let _walk = (node) => {
            if(node.left) {
                _walk(node.left)
            }
            if(node.right) {
                _walk(node.right)
            }
            nodes.push(node.value);
        }
        _walk(this.root);
        return nodes;
    }

    bsf(tree) {
        let data = [];
        let treeQ = [];

        let node = this.root;
        data.push(node);

        while(data.length) {
            let temp = data.shift();

            if(temp.left) {
                data.push(temp.left);
            }
            if(temp.right) {
                data.push(temp.right);
            }
            treeQ.push(temp);
        }

        while(treeQ.length) {
            console.log(treeQ.shift());
        }
        return;
    }

    maxValue() {
        let data = [this.root];
        let max = this.root.value;

        while(data.length){
            let current = data[0];

            if(current.left) {
                data.push(current.left);
            }
            if(current.right){
                data.push(current.right);
            }
            let newCurrent = data.shift();

            if(max < newCurrent.value) {
                max = newCurrent.value;
            }
        }
        return max;
    }



}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    add(value) {
        
        let newNode = new Node (value);
       
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            
            while(true){
                if(value === current.value) {return undefined; }
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else { 
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            } 
        }
    }
    contains(value) {
        if(this.root === null) {
            return false;
        }

        let current = this.root;
        let found = false;

        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else { 
                return true; 
            }
        }
        return false;
    }
    
}


let tree = new BinaryTree();

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

console.log(tree.maxValue());

// console.log(tree.bsf(tree));


module.exports = {Node, BinaryTree, BinarySearchTree};