//flower bed problem leetcode
/*
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

//edge case pr focus krna hai like veryu first veealue and last valie
//[1, 0, 0, 0, 1];
//[0, 0, 1, 0, 0]; --> this is the edge case we have to be focused!!

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0; //0 plantkr skte hai

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            let isRightempty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0); // also checking for extreme right position

            if (isLeftEmpty && isRightempty) {
                flowerbed[i] = 1;
                count++;
                if (count >= n) {
                    return true;
                }

            }
        }
    }
    return count >= n;
};