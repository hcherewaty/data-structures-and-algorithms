'use strict';

const Thing = require('../stacks_and_queues/stacks-and-queues');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //adds a thing to the end
    enqueue(val) { //accepts a value
  
        //create a new node using the value passed in
        let newNode = new Node(val);
        //check if queue is empty:
        //if there are no nodes in the queue, set this node to be the first and last property of the queue
        if(!this.first) { //edge case
            this.first = newNode;
            this.last = newNode;
        } else {
            //otherwise, set the next property on the current last to be that node,
            this.last.next = newNode;
            //and then set the last property of the queue to be that node
            this.last = newNode;
        }
         //increment the size of the queue by 1 and return
         return ++this.size;
    }
  
    //removes the first thing that was added in (at the beginning)
    dequeue() {
  
        //if there is no first property, return null
        if(!this.first) {return null;}
  
        //store the first property in a variable
        let temp = this.first;
  
        //see if the first is the same as the last (check if there is only 1 node).  If so, last to be null.
        if(this.first === this.last) {
            this.last = null;
        }
  
        //If there is more than 1 node, set the first property to be the next property of the first
        this.first = this.first.next;
        
        //Decrement size by 1
        this.size--;
  
        //return the value of the node dequeued.
        return temp.value;
    }
    peek() {
        //if there is no first
        if(!this.first) {
          return null;
        } else {return this.first}
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
        let data = new Queue();
        let treeQ = new Queue();

        data.enqueue(tree.root);

        while(data.length) {
            let temp = data.dequeue();

            if(temp.left) {
                data.enqueue(temp.left);
            }
            if(temp.right) {
                data.enqueue(temp.right);
            }
            treeQ.enqueue(temp);
        }

        while(treeQ.length) {
            console.log(treeQ.dequeue());
        }
        return;
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

console.log(tree.bsf(tree));


module.exports = {Node, BinaryTree, BinarySearchTree};