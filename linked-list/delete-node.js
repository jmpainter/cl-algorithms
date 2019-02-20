class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let node = this.head;
      while (node.next.value !== value) {
        node = node.next;
      }
      node.next = node.next.next;
    }
  }

  print() {
    let node = this.head;
    let listString = '';
    while (node.next !== null) {
      listString = listString + node.value + '->';
      node = node.next;
    }
    listString = listString + node.value;
    console.log(listString);
  }
}

const myList = new LinkedList();
debugger;
myList.append('a');
myList.append('b');
myList.append('c');

myList.print();

myList.delete('b');

myList.print();
