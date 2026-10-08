// Shuffle the Array

// Problem statement
// You are given an array nums containing 2n elements.
// The array is divided into two equal parts:
// - First half: x1, x2, x3, ...
// - Second half: y1, y2, y3, ...
// Your task is to create a new array by taking one element from the first half, then one from the second half, alternately.


function shuffle(nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// Expected: [2, 3, 5, 4, 1, 7]

console.log(shuffle([1, 1, 2, 2], 2));
// Expected: [1, 2, 1, 2]
