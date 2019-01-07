'use strict';

class PseudoQueue {
    constuctor() {
        this.top = null;
        this.next = null;
    }

    enqueue(stackOne, stackTwo) {
        let previous;
        let stack = new Stack();
        stack.push(stackOne);
        this.top = previous;
        stack.push(stackTwo);
        top.next = previous;
        previous = top;
    }

    dequeue(stackOne, stackTwo) {
        let stack = new Stack();
        stack.push(stackOne);
        stack.push(stackTwo);
        stack.pop();
    }
}

let newQueue = new PseudoQueue();

console.log(myQueue.enqueue('Heather', 'Steve'));