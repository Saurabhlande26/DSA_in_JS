// function isValid(s) {
//   const stack = [];

//   const pairs = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (const ch of s) {
//     // Opening bracket
//     if (ch === "(" || ch === "[" || ch === "{") {
//       stack.push(ch);
//     }
//     // Closing bracket
//     else {
//         console.log(stack.pop() , pairs[ch]);
//       if (stack.pop() !== pairs[ch]) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

const isValid = (s) => {
  const stack = [];

  const pair = {
    "}": "{",
    ")": ")",
    "[": "]",
  };

  for (const char of s) {
	  if (char == "(" || char == "{" || char == "[") {
		
    }
  }
  return true;
};

console.log(isValid("()[]{}")); // true
// console.log(isValid("([{}])")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
