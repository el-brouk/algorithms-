function sumRecursion(arr) {
  
  if (arr.length == 1) {
    return arr[0];
  } else {
    let temp = arr[0];
    arr.splice(0,1);
    return (temp + sumRecursion(arr));
  }
}

let arr = [2,3,6];
alert(sumRecursion(arr));