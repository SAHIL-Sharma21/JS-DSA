//https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

var maxArea = function (height) {
    let maxWaterArea = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {

        //calcualting height
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;

        let currentArea = currentHeight * currentWidth;

        maxWaterArea = Math.max(maxWaterArea, currentArea);

        //moving the pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWaterArea;
};