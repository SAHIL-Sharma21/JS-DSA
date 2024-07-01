/**
 Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 */

var maxVowels = function (s, k) {
    const vovels = new Set(['a', 'e', 'i', 'o', 'u']);

    let currentVovelCount = 0;
    let maxVovelCount = 0;

    //initial loop
    for (let i = 0; i < k; i++) {
        if (vovels.has(s[i])) currentVovelCount++;
    }
    maxVovelCount = currentVovelCount;

    //sliding the window
    for (let i = k; i < s.length; i++) {
        if (vovels.has(s[i])) currentVovelCount++;
        if (vovels.has(s[i - k])) currentVovelCount--;

        maxVovelCount = Math.max(maxVovelCount, currentVovelCount);
    }

    return maxVovelCount;
};