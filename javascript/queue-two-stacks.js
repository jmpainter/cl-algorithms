class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    if (this.stack1.length === 0) {
      this.transferStacks();
    }
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      this.transferStacks();
    }
    return this.stack2.pop();
  }

  transferStacks() {
    if (this.stack1.length === 0) {
      while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
      }
    }
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

myQueue.enqueue(7);
myQueue.enqueue(8);

console.log(myQueue.dequeue());
