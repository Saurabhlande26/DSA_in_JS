// Kadane's Algorithm
// This will sum of every number from start to end
// after every index it move to next index to sum

// complexity of this solution is O(n^2) because we have two loops one inside another
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;

//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];

//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum;
// }

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
