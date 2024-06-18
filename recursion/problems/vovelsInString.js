//finding vovels in given string

//using iterative apprach
function isVovels(charcter) {
    let lowerChar = charcter.toLowerCase();
    let vovels = "aeiou";

    if (vovels.indexOf(lowerChar) !== -1) {
        return true;
    } else {
        return false;
    }
}


function countVovels(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (isVovels(string[i])) {
            count++;
        }
    }
    return count;
}
// console.log(countVovels("Hello"));

//using recursive approach
function recursiveCountVovels(string, stringLength) {
    //base case -> if string is 1 then return the number if true or false(0);
    console.log(`string length: ${stringLength}, actual string: ${string.substring(0, stringLength)}`);
    if (stringLength == 1) {
        console.log("base case got hit here");
        console.log("Base case: ", Number(isVovels(string[0])));
        return Number(isVovels(string[0]));
    }

    // return recursiveCountVovels(string, stringLength - 1) + isVovels(string[stringLength - 1]);
    let result = recursiveCountVovels(string, stringLength - 1) + isVovels(string[stringLength - 1]);
    console.log(`Count after checking ${string[stringLength - 1]}: ${result}`);
    return result;
}

let myString = "sahil";
console.log(recursiveCountVovels(myString, myString.length));