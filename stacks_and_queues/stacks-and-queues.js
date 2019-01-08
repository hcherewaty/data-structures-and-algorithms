class Node {
  constructor(value) {
      this.value = value;
      this.next = null;                 
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);

    if(!this.top) {
      this.top = node;
    } else {return null;}
      node.next = this.top;
      this.top = node;
    }

  pop() {

    // if(!this.top) {
    //   throw error;
    // }
    let poppedItem = this.top;
    this.top = this.top.next;
    console.log(poppedItem);
    return poppedItem.value;
  }


  peek() {

    if(!this.top) {
      return null;
    } else {return this.top}
  }
}


class Queue {
  constructor() {
    this.top = null;
    this.rear = null;
  }

  peek() {
    return this.top;
  }

  enqueue(value) {
    //put in the rear of the queue
    let node = new Node(value);

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

// let newQ = new Queue();

// newQ.enqueue('Heather');
// newQ.enqueue('Steve');
// console.log(newQ.peek());

module.export = {Node, Stack, Queue};