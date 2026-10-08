const checkDuplicateValue = (array) => {
  if (!array.length) return false;
  const map = new Set();

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      return true
    }
    map.add(array[i]);

  }
  return false
}

console.log(checkDuplicateValue([1, 2, 3]))

// Input: [1, 2, 3, 1]
// Output: true