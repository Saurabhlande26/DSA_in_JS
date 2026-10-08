const removeDuplicate = (arr) => {
  if (!arr?.length) return false;

  const uniqueArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
};

// removeDuplicate([1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9, 10]);

