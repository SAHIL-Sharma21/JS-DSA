//toughproblem
//https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
/*
Two strings are considered close if you can attain one from the other using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
*/

/* 
//task - algo design
1)length
2)FM 1 and FM2 -> frequency Map create krna padega
3) FM - keys compare size
4) have same chars 
5) values  -> Array -> sort
6) array -> string -> compare
*/

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    //making frequerncy map
    const frequencyMap1 = new Map();
    const frequencyMap2 = new Map();

    //filling our FM1 and FM2
    for (const char of word1) {
        frequencyMap1.set(char, (frequencyMap1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        frequencyMap2.set(char, (frequencyMap2.get(char) || 0) + 1);
    }


    //comparing the keys
    const characters1 = new Set(frequencyMap1.keys());
    const characters2 = new Set(frequencyMap2.keys());

    if (characters1.size !== characters2.size) return false;

    const haveSameCharacters = [...characters1].every((char) => characters2.has(char));

    if (!haveSameCharacters) return false;

    //values ko sort krke array create
    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b);
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b);

    const areFrequencyIdentical = sortedFrequency1.join(",") === sortedFrequency2.join(",");

    if (!areFrequencyIdentical) return false;

    return true;
};