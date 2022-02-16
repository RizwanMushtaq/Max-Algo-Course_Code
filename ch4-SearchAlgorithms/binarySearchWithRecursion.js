//Binary search with Recursion

function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  console.log("executing loop");
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (sortedArr[middleIndex] === element) {
    return middleIndex;
  }

  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1;
    let newSortedArr = sortedArr.slice(startIndex, endIndex+1)
    return findElement(newSortedArr, element)
  } else {
    endIndex = middleIndex - 1
    let newSortedArr = sortedArr.slice(startIndex, endIndex)
    return findElement(newSortedArr, element)
  }
}

const arr = [1, 5, 9, 13, 99, 100];

// console.log(findElement(arr, 99));
