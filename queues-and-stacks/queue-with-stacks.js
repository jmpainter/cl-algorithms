class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue(item) {
    debugger;
    if (!this.outStack.peek()) {
      while (this.inStack.peek()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(7);
myQueue.enqueue(8);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
