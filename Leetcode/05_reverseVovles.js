//reverse vovels
/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/

//solving by 2 pointer apprach
var reverseVowels = function (s) {
    const vovels = "aeiouAEIOU"; //vovels list

    const charcters = s.split("");

    //2 pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        //when to  move left ptr
        while (left < right && vovels.indexOf(charcters[left]) === -1) {
            left++;
        }

        //when to move right ptr
        while (left < right && vovels.indexOf(charcters[right]) === -1) {
            right--;
        }

        //swap
        if (left < right) {
            let temp = charcters[left];
            charcters[left] = charcters[right];
            charcters[right] = temp;

            left++;
            right--;
        }
    }
    return charcters.join('');
};