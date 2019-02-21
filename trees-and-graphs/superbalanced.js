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

function dfs(node, values = []) {
  values.push(node.value);
  if (node.left) {
    values = dfs(node.left, values);
  }
  if (node.right) {
    values = dfs(node.right, values);
  }
  return values;
}

function dfsIterative(root) {
  const nodes = [root];
  const values = [];
  while (nodes.length) {
    const node = nodes.pop();
    values.push(node.value);
    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }
  }
  return values;
}

function bfsIterative(root) {
  const nodes = [root];
  const values = [];

  while (nodes.length) {
    const node = node.shift();
    values.push(node.value);
    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }
  }
  return values;
}

function isBalanced(root) {
  const depths = [];
  const nodes = [[root, 0]];

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1] > 1))
        ) {
          return false;
        }
      }
    } else if (node.left) {
      nodes.push([node.left, depth + 1]);
    } else if (node.right) {
      nodes.push([node.right, depth + 1]);
    }
  }
  return true;
}

const myTree = new BinaryTreeNode(1);

myTree.insertLeft(2);
myTree.insertRight(3);
myTree.left.insertLeft(4);
myTree.left.insertRight(5);
myTree.right.insertLeft(6);
myTree.right.insertRight(7);

// console.log(dfs(myTree));
console.log(isBalanced(myTree));
