//implementing length funtion without using length 

//by iterative method

function lengthOfString(string) {

    let count = 0;

    //using for looop without length
    // for (const value of string) {
    //     count++;
    // }

    //using while loop
    while (string) {
        count++;
        string = string.slice(1);
    }

    return count;
}

// console.log(lengthOfString("hello"));

//solving with recursion
function recursiveLength(string) {
    //if string emopty hai toh retun 0
    if (string === "") {
        return 0;
    }

    return 1 + recursiveLength(string.substring(1));
}
console.log(recursiveLength("hello"));