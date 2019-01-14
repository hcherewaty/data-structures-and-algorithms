'use strict';

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

    //steps to add:
        //create a new node
         // starting at the root:
        // check if there is a root; if not, the root now becomes that new node. 
        //If there is a root, check if the value of the new node is greater than or less than the value of the root.
        //If it is greater:
            //check to see if there is a node to the right; if there is, move to that node and repeat these steps.
            //If there is not, add that node as the right property.
        //If it is less:
            
            //If there is not, add that node as the left property
    //return tree at end of method ?
let tree = new BinaryTree();


// console.log(tree.preOrder());
// tree.inOrder();
// tree.postOrder();


let treeBST = new BinarySearchTree();
// treeBST.root = new Node(10);
// treeBST..root.right = new Node (15);
// treeBST..root.left = new Node(7);
// treeBST..root.left.right = new Node(9);

// console.log(treeBST);
// console.log(treeBST.root);
// console.log(treeBST.root.right);


module.exports = {Node, BinaryTree, BinarySearchTree};