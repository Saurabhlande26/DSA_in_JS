const binarySearch = (arr, target) => {
  if (!arr.length) return -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // First Check middle

    if (arr[mid] == target) {
      return mid;
    }
    // if left is less than target then it will direct jump into mid else right will come close
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
// if array is sorted then it work otherwise it will not work
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
