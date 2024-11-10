// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function sortEvenOdd(arr) {
  let n = arr.length;

  //Sort even numbers first
  for (let i = 0; i < n; i++) {
    // Only proceed if the current position `i` should be an even number
    if (arr[i] % 2 !== 0) {
      let minIndex = i;

      // Find smallest even number in the unsorted part of the array

      for (let j = i + 1; j < n; j++) {
        if (
          arr[j] % 2 === 0 &&
          (arr[j] < arr[minIndex] || arr[minIndex] % 2 !== 0)
        ) {
          minIndex = j;
        }
      }
      // Swap the found even number with the current position
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  // Sort odd numbers after the even numbers
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) continue; // Skip even numbers

    let minIndex = i;

    // Find smallest odd number in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] % 2 !== 0 && arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found odd number with the current position
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const mixedArray = [5, 2, 9, 4, 7, 6];

console.log('Even-Odd Sorted Array:', sortEvenOdd(mixedArray));
