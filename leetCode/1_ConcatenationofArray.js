// Concatenation of Array

// 1. What is the question asking?
//   Suppose you have an array:
// const nums = [1, 2, 3];
// The question asks you to create a new array that contains the original array two times, one after another.




function getConcatenation(nums) {
  let result = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < nums.length; j++) {
      result.push(nums[j]);
    }
  }

  return result;
}

console.log(getConcatenation([1, 2, 3]));
// Output: [1, 2, 3, 1, 2, 3]