// step 1
// declare variable
// loop
// compaire

const isPalindrome = (string) => {
  // this is for remove spacing, symbols, and uppercase/lowercase differences.
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
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
console.log("madam" === "madam".split("").reverse().join(""));