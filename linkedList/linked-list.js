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
        this.head = null;  
        this.tail = null;
        this.length = 0;                         // declare head Node as null
    }

    // Add a new Node with value to the head
    insert(value) {
        let node = new Node(value);       // adds a new Node
        node.next = this.head;            // points new node's next property to head
        this.head = node;                 // head equals node
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

    // add a node to the end of the linked list
    append(value) {
        let node = new Node(value);
        if( !this.head){
            this.head = node;
            this.tail = this.head;
            return;
        }
        let current = this.head;               //start from the head node
        
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    insertBefore(oldVal, newVal) {
        let node = new Node(newVal);
        let current = this.head;
        let preNode = current;
    
        while (current.value !== oldVal) {
          preNode = current;
          current = current.next;
        }
    
        node.next = current;

        if(preNode) {                      
            preNode.next = node;
        } else {
            node.next = this.head;
            this.head = node;
        } 
      }

    insertAfter(oldVal, newVal) {
        let node = new Node(value);

        if( !this.head) {
            this.head = node;
            return;
        }
        
        let current = this.head;

        while(current.value !== oldVal) {
            current = current.next;
        }
                                              // creates new Node
        node.next = current.next;          // new node to next node
        current.next = node;               // points previous node to new node
    }

    kFromEnd(k) {
        let length = 0;
        let current = this.head;
        let target;

        while(current.next) {
            current = current.next;
            length++;
        }

        target = length - k;
        length = 0;
        current = this.head;

        while (length < target) {
            current = current.next;
            length++;
        }
        return current.value;
    }

    print() { 
         let current = this.head;
         while(current.next) {
             console.log(current.value);
             current = current.next;
         }  
         console.log(current.value);                               
    }
}

let list = new LinkedList();

list.insert('Heather');
list.insert('Steve');
list.append('Atlas');

// list.insertAfter('Steve', '40');
// list.insertBefore('Steve', '40');
// list.append('New thing');

// console.log(list.includes('John'));

list.print();

// console.log(list.kFromEnd(1));

// console.log(util.inspect(list, {depth: 10}));

module.exports = LinkedList;