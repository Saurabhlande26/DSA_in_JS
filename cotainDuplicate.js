// Time complexity: O(n)
// Space complexity: O(n)

function containsDuplicate(nums) {
  const arr = new Set();
  for (const n of nums) {
    if (arr.has(n)) {
      return true;
    }
    arr.add(n);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true
