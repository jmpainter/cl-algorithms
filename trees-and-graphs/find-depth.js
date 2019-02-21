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

function findDepth(root) {
  let maxDepth = 0;
  const nodes = [{ node: root, depth: 1 }];
  while (nodes.length) {
    const { node, depth } = nodes.pop();
    if (depth > maxDepth) {
      maxDepth = depth;
    }
    if (node.left) {
      nodes.push({
        node: node.left,
        depth: depth + 1
      });
    }
    if (node.right) {
      nodes.push({
        node: node.right,
        depth: depth + 1
      });
    }
  }
  return maxDepth;
}

let myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.right.insertLeft(9);
myTree.right.insertRight(14);

// console.log(dfs(myTree));
console.log(findDepth(myTree));

myTree = new BinaryTreeNode(4);

// console.log(dfs(myTree));
console.log(findDepth(myTree));

myTree = new BinaryTreeNode(8);

myTree.insertLeft(3);
myTree.insertRight(10);
myTree.left.insertLeft(1);
myTree.left.insertRight(6);
myTree.left.left.insertLeft(9);

// console.log(dfs(myTree));
console.log(findDepth(myTree));
