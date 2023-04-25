// Given a string, find the length of the longest substring that contains
// no more than k distinct letters.

function longestSubstrWithKDistinctLetters(str, k) {
  let windowStart = 0,
    letterFrequencies = {},
    longestSubstrSoFar = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let windowEndChar = str[windowEnd];

    // if the letter hasn't been seen yet,
    // initialize it in the letterFrequences tracker
    // increment it.
    if (!letterFrequencies[windowEndChar]) {
      letterFrequencies[windowEndChar] = 0;
    }
    letterFrequencies[windowEndChar]++;

    // This while loop only run if we need to shrink our window.
    while (Object.keys(letterFrequencies).length > k) {
      // we need the character at the beginning of the window.
      let windowStartChar = str[windowStart];
      // removing a character from the window
      letterFrequencies[windowStartChar]--;

      if (letterFrequencies[windowStartChar] === 0) {
        //delete that entry
        delete letterFrequencies[windowStartChar];
      }
      windowStart++;
    }
    // we have the correct amount of letters in our window.
    longestSubstrSoFar = Math.max(
      longestSubstrSoFar,
      windowEnd - windowStart + 1
    );
  }

  return longestSubstrSoFar;
}

console.log(longestSubstrWithKDistinctLetters("acccpbbebi", 3));
// 6
console.log(longestSubstrWithKDistinctLetters("aaaabbcccd", 1));
// 4
console.log(longestSubstrWithKDistinctLetters("abcdefg", 10));
// 7
