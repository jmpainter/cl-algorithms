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

function validate(string) {
  const stack = new Stack();

  for (let char of string) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    if (char === ')') {
      if (stack.peek() === '(') {
        stack.pop();
      }
    }
    if (char === ']') {
      if (stack.peek() === '[') {
        stack.pop();
      }
    }
    if (char === '}') {
      if (stack.peek() === '{') {
        stack.pop();
      }
    }
  }

  return stack.peek() === null ? true : false;
}

console.log(validate('{ [ ] ( ) }'));
console.log(validate('{ [ ( ] ) }'));
console.log(validate('{ [ }'));
