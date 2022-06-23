/**
* Find missing number from 1 - N range
* @param {number} n
* @param {number[]} nums
* @returns {number} Missing number
*/
function findMissingNumber(n, nums) {
    if (typeof n !== "number") {
        throw new Error("N must be number")
    }
    const sum = (n * (n + 1)) / 2;
    const missingSum = nums.reduce((prev, curr) => +prev + +curr);
    if (isNaN(missingSum)) {
        throw new Error("nums must contains numbers only")
    }
    return sum - missingSum;
}

console.log(findMissingNumber(5, [1, 2, 3, 5]));
console.log(findMissingNumber(10, [6, 1, 2, 8, 3, 4, 7, 10, 5]));

// Bonus
console.log(findMissingNumber(5, ["1", 2, 3, "5"]));
