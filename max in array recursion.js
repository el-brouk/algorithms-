function maxRecursion(arr, max = null) { 
  
  if (arr.length == 0) {
    return max;
  } else {
    max = Math.max(arr.at(-1), max);
    arr.pop();
    return (maxRecursion(arr, max));
  }
};



function maximum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};



let arr = [2,3,6,5,9,7,4];
alert(maxRecursion(arr));
alert(maximum(arr));