//leetcode problem of remove adjacent in the string
// let inputString = "aabcc";

// let i = 1;

// console.log(inputString.substring(0, i));//a
// console.log(inputString.substring(i + 1));//bcc
// console.log(inputString.substring(0, i) + inputString.substring(i + 1));// abcc


//case 1 -> removing adjacent

//using iterative apprach
function removeAdjacentDuplicate(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {

        if (i === string.length - 1 || string[i] !== string[i + 1]) { //age last hai toh i + 1 nhi hoga
            result += string[i];
        }
    }
    return result;
}
// console.log(removeAdjacentDuplicate("aabcc"));

//doing the same question with recursive apprach
function recursiveRemoveAdjacentDuplicate(string) {

    if (string.length <= 1) {
        return string;
    }

    if (string[0] === string[1]) {
        return recursiveRemoveAdjacentDuplicate(string.substring(1));//sirf right part wala ka funtion call kr dia
    } else {
        return string[0] + recursiveRemoveAdjacentDuplicate(string.substring(1));
    }
}
console.log(recursiveRemoveAdjacentDuplicate("aabcc"));


