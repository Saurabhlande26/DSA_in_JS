/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const arr = new Set();

    for (const value of nums) {
        if (arr.has(value)) {
            return true
        } else {
            arr.add(value)
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,4,1]))