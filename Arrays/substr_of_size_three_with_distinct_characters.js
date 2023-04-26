// Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

function countGoodSubstrings(s) {
  let windowStart = 0,
    arr = [],
    countGoodSets = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    arr.push(s[windowEnd]);

    if (windowEnd - windowStart === 2) {
      // make a set (Set's only store unique values)
      let mySet = new Set(arr);
      console.log("mySet", mySet);

      //check if the set has 3 values in it
      if (mySet.size === 3) {
        countGoodSets += 1;
      }
      arr.shift(s[windowStart]);
      windowStart++;
    }
   
  }
   return countGoodSets;
}

console.log(countGoodSubstrings("xyzzaz"));

// mySet Set(3) { 'x', 'y', 'z' }
// mySet Set(2) { 'y', 'z' }
// mySet Set(2) { 'z', 'a' }
// mySet Set(2) { 'z', 'a' }
// 1