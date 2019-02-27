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

class MaxStack {
  constructor() {
    // Initialize an empty stack
    this.stack = new Stack();
    this.maxes = new Stack();
  }

  // Push a new item onto the stack
  push(item) {
    this.stack.push(item);
    if (this.maxes.peek === null || item >= this.maxes.peek()) {
      this.maxes.push(item);
    }
  }

  // Remove and return the last item
  pop() {
    const item = this.stack.pop();
    if (item === this.maxes.peek()) {
      this.maxes.pop();
    }
    return item;
  }

  // Returns the last item without removing it
  peek() {
    return this.stack.peek();
  }

  getMax() {
    return this.maxes.peek();
  }
}

const myStack = new MaxStack();
myStack.push(4);
myStack.push(3);
myStack.push(8);
myStack.push(9);
myStack.push(2);
console.log(myStack.getMax());
myStack.pop();
myStack.pop();
console.log(myStack.getMax());
