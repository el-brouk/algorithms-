//quick sorting of array using RECURSION
//runtime complexity O(n*log n) - that is the best and the average case. if random pivot is the worst then O(n^2)

// simple solution:
function quickSort(arr) {
  if (arr.length < 2) {
    //if array is empty or has only 1 element
    return arr
  } else {
    //recursion

    //finding a random pivot
    let min = 1
    let max = arr.length - 1
    let random = Math.floor(min + Math.random() * max)
    let pivot = arr[random]

    let less = []
    let more = []

    for (let item of arr) {
      //sorting array items by the pivot
      if (item > pivot) more.push(item) // a sub-array of elements greater than the pivot
      if (item < pivot) less.push(item) // a sub-array of elements less than the pivot
    }
    return quickSort(less).concat(pivot, quickSort(more)) //megre the pivot with it's 2 sub-arrays, sort each of the sub-arrays
  }
}

// no extra-space solution (in-place sorting):
function quickSort(array, left = 0, right = array.length - 1) {
  const pivotIndex = partition(array, left, right)

  // if left sub-array has more than 1 element
  if (left < pivotIndex - 1) {
    quickSort(array, left, pivotIndex - 1)
  }

  // if right sub-array has more than 1 element
  if (pivotIndex < right) {
    quickSort(array, pivotIndex, right)
  }

  return array
}

//finding a random pivot
function random(min, max) {
  const interval = max - min
  const shift = min

  return Math.round(Math.random() * interval + shift)
}

function partition(array, left, right) {
  //finding a random pivot
  const pivot = array[random(left, right)]

  // traversing the array from both ends towards the center
  while (left <= right) {
    while (array[left] < pivot) {
      left++
    }

    while (array[right] > pivot) {
      right--
    }

    // if we are not in the middle of the array
    if (left <= right) {
      // flipping elements
      ;[array[left], array[right]] = [array[right], array[left]]
      left++
      right--
    }
  }

  // return new pivot position
  return left
}
