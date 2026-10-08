function mergeSorted(a, b) {
  const sortedArr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] > b[j]) {
        sortedArr.push(b[j]);
      } else {
        sortedArr.push(a[i]);
      }
    }
  }
  return sortedArr;
}

console.log(mergeSorted([1, 2, 4], [1, 3, 4]));
// [1, 1, 2, 3, 4, 4]

console.log(mergeSorted([], [0]));
// [0]
