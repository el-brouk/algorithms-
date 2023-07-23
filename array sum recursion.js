//algorithm for finding the SUM of all elements in array in RECURSION


function sumRecursion(arr) {
  
  if (arr.length == 1) {
    return arr[0]; 

  } else {
    let temp = arr[0]; //remember the first element
    arr.splice(0,1); //delete the first element
    return (temp + sumRecursion(arr)); //sum the remembered element with the result of sum function for the rest of the aaray
  }
}
