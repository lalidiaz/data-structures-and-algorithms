// Given an array, find the average of all contiguous sub-arrays of size K.

function avgSubArray(arr, k) {
  // what do I need to return?
  const averages = [];

  // what do I need to keep track of?
  let windowStart = 0,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // as I loop over the elements in the array, I want to start to add the windowEnd to my sum until I reach the window size.
    windowSum += arr[windowEnd];

    // why "k - 1" ? because K is a size and windowEnd is an index.
    if (windowEnd >= k - 1) {
      // add the average of the current window to the averages array.
      averages.push(windowSum / k);

      // subtract the integer at the windowStart from windowSum.
      windowSum -= arr[windowStart];

      // move the window start one spot.
      windowStart++;
    }
  }

  return averages;
}

console.log("result 1==>", avgSubArray([1, 2, 3, 4, 5], 3));
//result 1==> [ 2, 3, 4 ]
console.log("result 2==>", avgSubArray([1, -2, 3, 8, -1, 4, 5], 5));
//result 2==> [ 1.8, 2.4, 3.8 ]

// O(n)
