// sort array by selection
//runtime complexity O(n^2)

//function to find the smallest element index in an array
function findSmallest(arr) { 
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) { //if element is smaller than stored smallest element
            smallest = arr[i]; //update stored smallest element
            smallestIndex = i;
        }
    }
    return smallestIndex; //return the index of smallest element in array

}

//function to create a new sorted array
function selectionSort(arr) {
    let newArr = [];
    let length =  arr.length
    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(arr);
        newArr.push(arr.splice(smallestIndex, 1)); // push the smallest element to the end of a new array and delete it from the old array
    }
    return newArr;
}