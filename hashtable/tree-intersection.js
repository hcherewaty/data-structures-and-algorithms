'use strict';

const HMap = require('./hashtable-ll');
const Tree = require('../tree/tree.js');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function treeIntersection(t1, t2) {
    let iArr = [];
    let qArr = [t1.root];
    let hash = new HMap(2024);

    while(qArr.length){
        let node = qArr.shift();

        if(node.left){
            qArr.push(node.left);
        }

        if(node.right){
            qArr.push(node.right);
        }

        hash.add(node.value);
    }

    qArr = [t2.root];

    while(qArr.length){
        
       let node = qArr.shift();

        if(node.left) {
            qArr.push(node.left);
        }

        if(node.right){
            qArr.push(node.right);
        }

        if(hash.contains(node.value)){
            iArr.push(node.value)
        }
    }
    return iArr;
}

let t1 = new Tree.BinaryTree();

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
t1.root = a;

let t2 = new Tree.BinaryTree();

let ab = new Node('11');
let bc = new Node('6');
let cd = new Node('5');
let de = new Node('15');
let ef = new Node('9');
let fg = new Node('3');

ab.left = bc;
ab.right= cd;
cd.left = fg;
bc.left = de;
bc.right = ef;
t2.root = ab;

console.log(treeIntersection(t1, t2));

module.exports = {treeIntersection, t1, t2}