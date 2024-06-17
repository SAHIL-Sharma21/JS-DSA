//solving reverse a string

//usinging iterative appraoch
function reverseString(string) {
    let reverseString = "";
    let length = string.length - 1;

    while (length >= 0) {
        reverseString += string[length];
        length--;
    }
    return reverseString;
}

//use case
// console.log(reverseString("hello"));


//using recursion --> tough
function recursiveReverseString(string) {
    //base case --> string empty hai tb woh string retutn krdo
    console.log(`current string: ${string}`);
    if (string === "") {
        return string;
    }

    let reversePart = recursiveReverseString(string.substring(0, string.length - 1));
    let result = string[string.length - 1] + reversePart;

    console.log(`Reversing: Last char: ${string[string.length - 1]} added in front of ${reversePart} to form a result: ${result}`);
    return result;
    // return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1));
}

console.log(recursiveReverseString("hello"));