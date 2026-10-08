// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr?.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         console.log(arr[i], arr[j]);
//         return [i,j];
//       }
//     }
//   }
//   return false;
// };

function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const required = target - nums[i];
    console.log({ required, seen });

    if (seen.has(required)) {
      return [seen.get(required), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 8, 1, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 5, 2, 6, 3, 5, 8, 0], 2));
