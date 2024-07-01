//good question on array an impotant one
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

var productExceptSelf = function (nums) {
    let length = nums.length;
    //making 2 new array as left and right and filling it with 1
    let left = new Array(length).fill(1);
    let right = new Array(length).fill(1);

    let answer = new Array(length);

    //making left side array
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    //making right side array
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    //making result
    for (let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));