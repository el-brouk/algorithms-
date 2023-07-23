// REMOVE linked list element RECURSION

function removeElements(head, val) {
    if (!head) return head;

    if (head.val === val) { //if the value is the value to remove
        head = removeElements(head.next, val); //put the next value on it's place
        return head; 
    } else {
        head.next = removeElements(head.next, val);  //else check the next value
        return head;
    }
   
};


//INSERTION of element in the middle of linked list
