// palinfrome problem using recusrion

//madam    -->> first and last charcter of the string is same then ignore if the string is not same then rrutn false
//ada
//d --> true  -> if there is single letter return true


function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }

    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.substring(1, string.length - 1));
    } else {
        return false;
    }
}

// console.log(isPalindrome("madam"));

//using for loop
function palindrome(string) {
    if (string.length === 0) {
        return "enter string";
    }

    // for (let i = 0; i < string.length - 1; i++) {
    //     if (string[0] !== string[string.length - 1]) {
    //         return false;
    //     }
    // }

    //while looop
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(palindrome("madam"));