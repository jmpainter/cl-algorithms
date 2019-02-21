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

function isValid(root) {
  const nodes = [{ node: root, upperBound: Infinity, lowerBound: -Infinity }];

  while (nodes.length) {
    const { node, lowerBound, upperBound } = nodes.shift();
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }
    if (node.left) {
      nodes.push({ node: node.left, upperBound: node.value, lowerBound });
    }
    if (node.right) {
      nodes.push({ node: node.right, upperBound, lowerBound: node.value });
    }
  }
  return true;
}

const myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.right.insertLeft(9);
myTree.right.insertRight(14);

console.log(isValid(myTree));

const myTree2 = new BinaryTreeNode(8);

myTree2.insertLeft(3);
myTree2.insertRight(10);
myTree2.left.insertLeft(1);
myTree2.left.insertRight(6);
myTree2.right.insertLeft(14);
myTree2.right.insertRight(9);

console.log(isValid(myTree2));
