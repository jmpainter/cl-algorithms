class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(head) {
  let prevNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;

    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;

console.log(reverse(a));
