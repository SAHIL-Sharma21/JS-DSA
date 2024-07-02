/**
 Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, 
there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 */

//Important concept - taking numberout from the string
// input - "39a" output- 39

// let str = "39a";
// let currentNum = 0;

// //loop
// for (const char of str) {
//     if (char >= "0" && char <= "9") {
//         currentNum = currentNum * 10 + (char - '0');
//     }
// }
// console.log(currentNum);


var decodeString = function (s) {
    let stack = [];
    let currentNum = 0;
    let currentString = "";


    for (const char of s) {
        if (char >= "0" && char <= "9") {
            currentNum = currentNum * 10 + (char - "0");
        } else if (char === '[') {
            stack.push(currentNum);
            stack.push(currentString);

            //reset
            currentNum = 0;
            currentString = "";
        } else if (char === ']') {
            let prevStr = stack.pop();
            let repeatTimes = stack.pop();

            currentString = prevStr + currentString.repeat(repeatTimes);
        } else {
            currentString += char;
        }
    }
    return currentString;
};