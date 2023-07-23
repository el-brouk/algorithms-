//quick sorting

function quickSort(arr) {
if (arr.length < 2) {
  return arr;
} else {

  let min = 1;
  let max = arr.length - 1;
  let random = Math.floor(min + Math.random() * max);
  let pivot = arr[random];
  let less=[];
  let more=[];
  
  for (let item of arr) {
    if (item > pivot) more.push(item);
    if (item < pivot) less.push(item);
  } 
  return quickSort(less).concat(pivot, quickSort(more));
 
}
}


let arr = [3,5,2,4,6,1];
alert(quickSort(arr));