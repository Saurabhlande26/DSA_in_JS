function rotateArray(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }
  rotate(nums, 0, size - 1);
  rotate(nums, 0, k - 1);
  rotate(nums, k, size - 1);

  return nums;
} 

function rotate(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
