'use strict';

const util = require('util');

// Node class
class Node {
    constructor(value) {
        this.value = value;         // value stored in Node
        this.next = null;          // pointer to the next Node
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;           // declare head Node as null
    }

    // Add a new Node with value to the head
    insert(value) {
        let node = new Node(value);       // adds a new Node
        if (! this.head) {                // if there is no head...
            this.head = node;             // assign this node to head
            return;
        }

        let current = this.head;          // start at head Node...

        while(current.next) {             // while I have a next on the thing I'm looking at...
        
        current = current.next;           // if I have a next, change pointer to the next one
        }

        current.next = node;              // when done with while loop, will be at the last one so add a node, node has a value of null
    }

    // Check if value exists in list
    includes(value) {                     // returns boolean result depending on whether 
        
        let current = this.head;
        // console.log(current);
        while(current.next) {
            if(current.value === value) {    // if value is value, return true...
                // console.log(true);
                return true;
            } 
            current = current.next;       // Keep moving through the list to the next node
        } 
        return current.value === value ? true: null; // checking the last node for the value I'm searching for; if it's true, return true, else return null                       
    }

    print() {                             // outputs all current Node values
        return list;
    }
}



let list = new LinkedList();

// list.print();


list.insert('Heather');
list.insert('Steve');
list.insert('Atlas');
list.insert('Lily');

console.log(list.includes('John'));

// console.log(util.inspect(list, {depth: 10}));

module.exports = LinkedList;