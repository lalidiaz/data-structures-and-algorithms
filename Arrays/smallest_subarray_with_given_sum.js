// Given an array of positive numbers and a positive number s,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to s.
// Return 0 if no such subarray exists.

function smallestContiguousSubarray(arr, s) {
  let windowStart = 0,
    windowSum = 0,
    minLengthSoFar = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Grow the window
    windowSum += arr[windowEnd];

    // windowSum >= s ?

    // if not, continue the iteration: grow the window.
    // if yes, shrink the window, until windowSum is less than s.
    while (windowSum >= s) {
      // shrink the window, decrement windowStart, remove first element in window from new shrunken window.

      // capture the windowLength and compare it to the min window length that I found so far.

      // why "windowEnd - windowStart + 1" ? because currentWindowLength and these "windowEnd" , "windowStart" are 0 base index.
      let currentWindowLength = windowEnd - windowStart + 1;

      minLengthSoFar = Math.min(currentWindowLength, windowSum);

      // remove the element.
      windowSum -= arr[windowStart];

      // increment windowStart.
      windowStart++;
    }
  }

  if (minLengthSoFar === Infinity) {
    return 0;
  }

  return minLengthSoFar;
}

console.log(smallestContiguousSubarray([1, 3, 2, 2, 4, 5], 6));
// 2
console.log(smallestContiguousSubarray([2, 1, 5, 2, 8], 7));
// 1
