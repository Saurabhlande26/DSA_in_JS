// step 1
// declare variable
// loop
// compaire

const isPalindrome = (string) => {
  let left = 0;
  let right = string?.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindrome("madam"));
// second method 
console.log("madam" === "madam".split("").reverse().join(""))