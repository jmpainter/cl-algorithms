class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');

function hasCycle(head) {
  let node = head;
  let fastNode = head;
  while (fastNode && fastNode.next) {
    node = node.next;
    fastNode = fastNode.next.next;
    if (node === fastNode) {
      return true;
    }
  }
  return false;
}

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(hasCycle(a));

d.next = null;

console.log(hasCycle(a));
