// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// 80 ms, faster than 64.60%
// var nextGreatestLetter = function (letters, target) {
//   return (
//     letters.reduce((acc, letter) => {
//       if (acc) {
//         return acc;
//       }
//       if (letter > target) {
//         return letter;
//       }
//       return acc;
//     }, null) || letters[0]
//   );
// };

// 147 ms, faster than 5.40%
// var nextGreatestLetter = function (letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] > target) {
//       return letters[i];
//     }
//   }

//   return letters[0];
// };

// 316 ms, faster than 5.20%
// var nextGreatestLetter = function (letters, target) {
//   let first = letters[0];
//   while (letters.length) {
//     if (letters[0] > target) {
//       return letters[0];
//     } else {
//       letters = letters.splice(1);
//     }
//   }

//   return first;
// };

// 76 ms, faster than 83.20%
// var nextGreatestLetter = function (letters, target) {
//   var min = 0;
//   var max = letters.length - 1;

//   while (max >= min) {
//     var mid = min + Math.round((max - min) / 2);

//     if (letters[mid] > target) {
//       return nextGreatestLetterDumb(letters, target, mid);
//     } else {
//       min = mid + 1;
//     }
//   }

//   return letters[0];
// };

// var nextGreatestLetterDumb = function (
//   letters,
//   target,
//   end = letters.length - 1
// ) {
//   for (let i = end; i >= 0; i--) {
//     if (letters[i] <= target) {
//       return i + 1 === letters.length ? letters[0] : letters[i + 1];
//     }
//   }

//   return letters[0];
// };


// 164 ms, faster than 5.20%
var nextGreatestLetter = function (letters, target) {
  if (letters[0] > target || target >= letters[letters.length - 1])
    return letters[0];

  let left = 0,
    right = letters.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);;
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "g")); // j
console.log(nextGreatestLetter(["c", "f", "j"], "j")); // c
