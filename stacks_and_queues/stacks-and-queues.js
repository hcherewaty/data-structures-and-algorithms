class Node {
    constructor(value) {
        this.value = value;         
        this.next = null;          
    }
}

class Stack {
    constructor() {
      this.stack = new Node();
      this.top = null;
    }
  
    push(value) {
      this.stack.unshift(value);
      this.top = value;
    }
  
    pop() {
      let value = this.stack.shift();
      this.top = this.stack[0];
      return value;
    }
  
    peek() {
      return this.top;
    }
  }

  class Queue {
    constructor() {
      this.q = new Node();
      this.front = null;
    }
  
    peek() {
      return this.front;
    }
  
    enqueue(value) {
      //put in the rear of the queue
  
    }
    dequeue() {
      //remove the first one
      //set fron to the next one
  
    }
  }
  
  module.export = {Node, Stack, Queue};