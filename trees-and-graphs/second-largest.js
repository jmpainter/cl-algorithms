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

function findLargest(root) {
  let current = root;
  while (current) {
    if (!current.right) {
      return current.value;
    }
    current = current.right;
  }
}

function secondLargest(root) {
  let current = root;

  while (current) {
    if (!current.right && current.left) {
      return findLargest(current.left);
    }
    if (current.right && !current.right.right && !current.right.left) {
      return current.value;
    }
    current = current.right;
  }
}

let myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.right.insertLeft(9);
myTree.right.insertRight(14);

console.log(secondLargest(myTree));

myTree = new BinaryTreeNode(4);

myTree.insertLeft(3);

console.log(secondLargest(myTree));

myTree = new BinaryTreeNode(4);

myTree.insertLeft(3);
myTree.insertRight(5);

console.log(secondLargest(myTree));

myTree = new BinaryTreeNode(8);

myTree.insertRight(14);
myTree.right.insertRight(20);
myTree.right.right.insertLeft(16);

console.log(secondLargest(myTree));
