// BST - Binary Search Tree

/* BST has the following properties:

every left child has a smaller value than its parent
every right child has a larger value than its parent
every node can contain from 0 to 2 children. */

// PREORDER TRAVERSAL (traverses the tree nodes from mid, to left, to right)
//returns the root, then its left children, then the right children

function preorderTraversal1 (root) { //recursive solution
    const nodes = [];
    if (!root) return;
    nodes.push(root.val); //take the value of the root
    inorder(root.left); //go down to the left leaf
    inorder(root.right); // go to the right
    
    return nodes;
}

function preorderTraversal2 (root) { //iterative solution
    let nodes = [];
    let stack = [];
    if (!root) return nodes;
    stack.push(root); // start

    while (stack.length) {
        let node = stack.pop(); //take the last element from the stack
        nodes.push(node.val); //add the node to the result
        if (node.right) stack.push(node.right); //if there is a right child then add it to stack
        if (node.left) stack.push(node.left); //if there is a left child then add it to stack 
    }
    return nodes;
}
