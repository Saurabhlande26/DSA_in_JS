// This will work
// const anagram = (s, t) => {
//   return s.split("").sort()?.join("") == t.split("").sort().join("");
// };

const anagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }
  return true;
};

// console.log(anagram("rat", "car")); // Output: false;
// console.log(anagram("anagram", "nagaram")); // Output: true;

const anagramVa = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  console.log(map);
  for (const char of t) {
    if (!map.has(char) || map.get(char) == 0) {
      return false;
    }
    map.set(char, (map.get(char) || 0) - 1);
  }
};
const s = "rat";
const t = "car";
console.log(anagramVa(s, t));
