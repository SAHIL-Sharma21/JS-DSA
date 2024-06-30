// Greatest Common Divisor of Strings
//leetcode

/* 
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

//formula if gcd -> eculiedian formula
//gcd(a, b) = gcd(a, b - a);

/*
    let a = "ABCABCABC";
    let b = "ABCABC";

    let result = a.slice(0, (a.length % b.length)); we can find b - a from this.
    console.log(result);;

*/

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd(a, b) {
        if (b.length === 0) {
            return a;
        }

        return gcd(b, a.slice(0, (a.length % b.length)));
    }

    return gcd(str1, str2);
};
// console.log(gcdOfStrings("LEET", "CODE"));
gcdOfStrings();