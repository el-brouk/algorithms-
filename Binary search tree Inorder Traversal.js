// BST - Binary Search Tree

/* BST has the following properties:

every left child has a smaller value than its parent
every right child has a larger value than its parent
every node can contain from 0 to 2 children. */

//Depth First Search or DFS:
// INORDER TRAVERSAL (traverses the tree nodes from left, to mid, to right)
//returns all nodes of BST in ASCENDING ORDER of value 

function inorderTraversal1 (root) { //recursive solution
    const nodes = [];
    if (!root) return;

    inorder(root.left); //go down until the left leaf
    nodes.push(root.val); //take the value of the left leaf
    inorder(root.right); // go to the right
    
    return nodes;
}

function inorderTraversal2 (root) { //iterative solution
    let nodes = [];
    let stack = [];
    if (!root) return nodes;
    let node = root;

    while (stack.length || node != null) {
        while (node != null) {
            stack.push(node); //add the node to a stack
            node = node.left; //go to the left leaf
        }
        // when arrived to the left leaf:
        node = stack.pop(); //take the last node from the stack
        nodes.push(node.val); //add it to the result
        node = node.right; //go to the right and start all over
        
    }
    return nodes;
}
