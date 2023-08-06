// BST - Binary Search Tree

/* BST has the following properties:

every left child has a smaller value than its parent
every right child has a larger value than its parent
every node can contain from 0 to 2 children. */

//Depth First Search or DFS:
// POSTORDER TRAVERSAL (traverses the tree nodes from left, to right, to mid)
//returns the left children, then the right children, then the root
// is used to delete the tree

function postorderTraversal1 (root) { //recursive solution
    const nodes = [];
    if (!root) return;
    
    postorderTraversal1 (root.left); //go down to the left leaf
    postorderTraversal1 (root.right); // go to the right leaf
    nodes.push(root.val); //take the value of the root
    
    return nodes;
}

