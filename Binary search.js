// BINARY SEARCH (of a value in a sorted array)
// RUNTIME COMPLEXITY O(log n)  (the power of 2 to obtain n)

function binSearch(arr, item) {
  let low = 0; //start of search segment
  let high = arr.length - 1; //end of search segment

  while (low <= high) { //while there is a segment to search in (sometimes better to make `low < high`)
  
    let mid = Math.round((low + high)/2); //find the middle position
    let guess = arr[mid]; //take the middle value 

    if (item == guess) { //if item is found in the middle
      return(`place is ${mid}`);
    }
    if (guess > item) { //if item is bigger than middle value
      high = mid - 1; //change the end if search segment
    } else { //if item is lower than middle value
      low = mid + 1; //change the start of search segment
    }
  }
  alert ('item not found'); //if 'while' loop has ended and item wasn't found 
}



// BINARY SEARCH (of a value in a sorted array) with RECURSION

function binSearchRecursion(arr, item, low = 0, high = arr.length - 1) {

  let mid = Math.round((low + high)/2); //find the middle position
  let guess = arr[mid]; //take the middle value 
  
  if (item == guess) {  //if item is found in the middle
    return (`place is ${mid}`);
  }
  if (guess > item) {  //if item is bigger than middle value
    
    return binSearchRecursion(arr, item, low, mid-1); //call the function again with new end of search segment
  } else if (guess < item) {
    
    return binSearchRecursion(arr, item, mid+1, high);  ////call the function again with new start of search segment
  }

alert ('item not found'); //if 'while' loop has ended and item wasn't found
}

