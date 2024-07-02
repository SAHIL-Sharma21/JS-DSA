/**
 Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
 */

var uniqueOccurrences = function (arr) {
    let uniqueHash = new Map();

    for (const num of arr) {
        if (uniqueHash.has(num)) {
            uniqueHash.set(num, uniqueHash.get(num) + 1);
        } else {
            uniqueHash.set(num, 1);
        }
    }

    const countSet = new Set();

    for (const count of uniqueHash.values()) {
        if (countSet.has(count)) {
            return false;
        }
        countSet.add(count);
    }
    return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));