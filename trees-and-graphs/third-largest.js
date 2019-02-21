class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function thirdLargest(root) {
  const nodes = [root];
  let first = 0;
  let second = 0;
  let third = 0;

  while (nodes.length) {
    const node = nodes.pop();
    const value = node.value;
    if (value > first) {
      third = second;
      second = first;
      first = value;
    } else if (value > second) {
      third = second;
      second = value;
    } else if (value > third) {
      third = value;
    }
    if (node.right) {
      nodes.push(node.right);
    }
    if (node.left) {
      nodes.push(node.left);
    }
  }
  return [first, second, third];
}

let myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.right.insertLeft(9);
myTree.right.insertRight(14);

console.log(thirdLargest(myTree));

myTree = new BinaryTreeNode(8);

myTree.insertRight(14);
myTree.right.insertRight(20);
myTree.right.right.insertLeft(16);

console.log(thirdLargest(myTree));
