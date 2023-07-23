// Binary search

function binSearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let count = 0;

  while (low <= high) {
    count++;
    
    let mid = Math.round((low + high)/2);
    let guess = arr[mid];
    if (item == guess) {
      alert(`place is ${mid}`);
      alert(`${count} iterations`);
      return;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  alert ('item not found');
}

let arr = [1,3,5,7,9];
binSearch(arr, 7);
