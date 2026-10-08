// Contains Duplicate

// Problem Statement
// Given an integer array nums, return:
// - true if any value appears at least twice
// - false if every value appears only once
// In simple words:
// We need to check whether the array contains any duplicate number.


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