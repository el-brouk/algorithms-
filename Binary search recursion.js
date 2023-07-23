// Binary search with recursion

function binSearchRecursion(arr, item, low = 0, high = arr.length - 1) {

    let mid = Math.round((low + high)/2);
    let guess = arr[mid];
    
    if (item == guess) {
      alert(`place is ${mid}`);
      return;
    }
    if (guess > item) {
      
      return binSearchRecursion(arr, item, low, mid-1);
    } else if (guess < item) {
      
      return binSearchRecursion(arr, item, mid+1, high);
    }
  
  alert ('item not found');
}

let arr = [1,3,4,5,7,9];
binSearchRecursion(arr, 7);

