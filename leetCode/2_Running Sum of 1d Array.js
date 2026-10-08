// Running Sum of 1d Array

// You've completed Problem 1, Concatenation of Array. Now we're moving to the next problem in our series.
// 1. Problem statement
// You are given an array of numbers called nums.
// Your task is to create a new array where each element is the sum of the current number and all the numbers before it.
// In simple words: Keep adding numbers from left to right and store each running total.

// Basically sum of all previous numbers and current number and store in new array.
function runningSum(nums) {
  let result = [];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // every time sum have value total of previos
    sum += nums[i];
    result.push(sum);
  }

  return result;
}

console.log(runningSum([1, 2, 3, 4]));
// Expected: [1, 3, 6, 10]

console.log(runningSum([1, 1, 1, 1, 1]));
// Expected: [1, 2, 3, 4, 5]
