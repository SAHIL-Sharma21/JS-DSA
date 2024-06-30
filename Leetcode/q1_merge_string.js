//leetcode problem where we are merging 2 word alternatively

/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

*/

var mergeAlternately = function (word1, word2) {
    let mergedStr = "";

    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        mergedStr += word1[i];
        mergedStr += word2[j];
        i++;
        j++;
    }

    //add remainder of word1 and word2
    while (i < word1.length) {
        mergedStr += word1[i];
        i++;
    }
    while (j < word2.length) {
        mergedStr += word2[j];
        j++;
    }


    return mergedStr;
};
console.log(mergeAlternately("abc", "pqrss"));