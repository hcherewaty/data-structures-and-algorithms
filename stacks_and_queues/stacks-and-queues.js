class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;                 
    }
}

class Stack {
    constructor() {
      this.top = null;
    }
  
    push(value) {
      let node = new Node();

      if(!this.top) {
        this.top = node;
      }
  
      this.top = value;
    }
  
    pop() {
      let newtop = this.top;
      if(newtop) {
        let popOffItem = newtop.value;
        newtop = top.next;
        return popOffItem;
      }
      // node.previous = this.top;
      // let popOffItem =  this.top;
      // this.top = node.previous;
      // console.log(this.top.previous);
      // let popOffItem = this.top;

      return;
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
      return this.top;
    }
  
    enqueue(value) {
      //put in the rear of the queue
      let node = new Node();

      if(!this.top) {
        this.top = node;
      }
  
      this.top = value;
      node.previous = this.top;

  
    }
    dequeue() {
      //remove the first one
      //set fron to the next one
  
    }
  }

  let newStack = new Stack();
  // console.log(newStack);
  newStack.push('Heather');
  newStack.push('Steve');
  newStack.push('Atlas');
  // console.log(newStack.peek());
  newStack.push('Lily');
  // newStack.pop();
  console.log(newStack.peek());

  let newQ = new Queue();

  newQ.enqueue('Heather');
  newQ.enqueue('Steve');
  console.log(newQ.peek());
  
  module.export = {Node, Stack, Queue};