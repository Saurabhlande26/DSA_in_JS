const sortArr = (nums1, nums2) => {
  const arr = [];

  for (const i of nums1) {
      for (const j of nums2) {
        if (i > j) {
          arr.push(i);
        } else {
          arr.push(j);
        }
    }
  }
  return arr;
};

const nums1 = [1, 2, 7];
const nums2 = [3, 4, 5];
console.log(sortArr(nums1, nums2));
