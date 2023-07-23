//quick sorting of array using RECURSION
//runtime complexity O(n*log n) - that is the best and the average case. if random pivot is the worst then O(n^2)

function quickSort(arr) {
if (arr.length < 2) { //if array is empty or has only 1 element
  return arr;

} else { //recursion

  //finding a random pivot 
  let min = 1;
  let max = arr.length - 1;
  let random = Math.floor(min + Math.random() * max);
  let pivot = arr[random];
  
  let less=[];
  let more=[];
  
  for (let item of arr) { //sorting array items by the pivot  
    if (item > pivot) more.push(item); // a sub-array of elements greater than the pivot
    if (item < pivot) less.push(item); // a sub-array of elements less than the pivot
  } 
  return quickSort(less).concat(pivot, quickSort(more)); //megre the pivot with it's 2 sub-arrays, sort each of the sub-arrays
 
}
}

