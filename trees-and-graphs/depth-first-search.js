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

function depthFirstSearch(node, values = []) {
  if (node.left) {
    depthFirstSearch(node.left, values);
  }
  values.push(node.value);
  if (node.right) {
    depthFirstSearch(node.right, values);
  }
  return values;
}

function breadthFirstSearch(node) {
  const values = [];
  const nodes = [node];
  while (nodes.length) {
    const current = nodes.shift();
    values.push(current.value);
    if (current.left) {
      nodes.push(current.left);
    }
    if (current.right) {
      nodes.push(current.right);
    }
  }
  return values;
}

let myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.right.insertLeft(9);
myTree.right.insertRight(14);

// console.log(dfs(myTree));
console.log(depthFirstSearch(myTree));
console.log(breadthFirstSearch(myTree));

myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.left.left.insertLeft(9);

// console.log(dfs(myTree));
console.log(depthFirstSearch(myTree));
console.log(breadthFirstSearch(myTree));
