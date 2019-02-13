'use strict';

const util = require('util');

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {    //stacks are constant time
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  //push (unshift)
  push(val) {  //should accept a value  // Insertion: 0(1) because we are adding to the beginning

      //create a new node with that value
      let newNode = new Node(val);

      //if there are no nodes in the stack, set the first and last property to be the newly created node
      if(!this.first) {
          this.first = newNode;
          this.last = newNode;
      } else {
          //If there is at least one node, create a variable that stores the current first property on the stack
          let temp = this.first;
          //Reset the first property to be the newly created node
          this.first = newNode;
          //Set the next property on the node to be the previously created variable
          this.first.next = temp;
      }
          //Increment the size of the stack by 1 (return the size)
          return ++this.size;
  }
  //pop (shift)
  pop() {  // Removal: 0(1) because we are removing from the beginning

      //If there are no nodes in the stack, return null
      if(!this.first) {return null;}

      //Create a temp variable to store the first property on the stack to return at the very end
      let temp = this.first;

      //If there is only 1 node, set the first and last property to be null
      if(this.first === this.last) {
          this.last = null;
      }

      //If there is more than 1 node, set the first property to be the next property on the current first
      this.first = this.first.next;

      //Decrement the size by 1
      this.size--;

      //Return the value of the node removed
      return temp.value;
  }

  peek() {
      //if there is no first
      if(!this.first) {
        return null;
      } else {return this.first}
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

let q = new Queue();
q.enqueue('Other thing')
q.enqueue('Heather');
q.enqueue('Steve');
q.enqueue('THIRD THING');

// q.dequeue();
// console.log(util.inspect(q, {depth: 10}));
// console.log(q.peek().value);
// console.log(util.inspect(list, {depth: 10}));



let stack = new Stack();
stack.push('Heather');

stack.push('Steve');
stack.push('THIRD THING');
stack.push('Other thing')
stack.pop();
// console.log(stack.peek().value);

// console.log(stack);

module.exports = {Node, Stack, Queue};