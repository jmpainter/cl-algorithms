class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, head) {
  let slow = head;
  let fast = head;
  for (let i = 1; i < k; i++) {
    fast = fast.next;
    if (!fast) {
      return null;
    }
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(3, a));
