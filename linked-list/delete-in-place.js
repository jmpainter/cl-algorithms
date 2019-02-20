class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(a);

deleteNode(b);

console.log(a);
