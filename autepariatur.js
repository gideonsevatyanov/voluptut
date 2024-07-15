// Create a sample tree
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
root.children.push(child1);
root.children.push(child2);
child1.children.push(new TreeNode(4));
child1.children.push(new TreeNode(5));
child2.children.push(new TreeNode(6));

// Copy the tree
const copiedTree = root.copy();

// Verify the copy
console.log(copiedTree);
