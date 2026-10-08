// Find Numbers with Even Number of Digits

// Your task is to count how many numbers in the array have an even number of digits.

// Input:  [12, 345, 2, 6, 7896]
// Output: 2
function findNumbers(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let toString = nums[i].toString().length;
        if (toString % 2 == 0) {
            count++
        }

    }

    return count;
}



console.log(findNumbers([12, 345, 2, 6, 7896]));
// Expected: 2

console.log(findNumbers([555, 901, 482, 1771]));
// Expected: 1

console.log(findNumbers([10, 100, 1000, 10000]));
// Expected: 2