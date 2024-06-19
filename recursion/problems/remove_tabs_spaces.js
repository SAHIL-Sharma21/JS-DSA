//leetoce problem for removing tabs and spaces from the string
//task is to remove all the tabs and spaces from a string, This includes the charcter \t and  " " from a string


function removeSpaceAndTabs(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char !== " " && char !== "\t") {
            result += char;
        }
    }
    return result;
}

// console.log(removeSpaceAndTabs("sah     il sharma"));

//solving recursively
function recursiveRemoveTabsAndSpaces(string) {

    if (string.length === 0) {
        return ""
    }

    const firstChar = string[0];
    const restOfString = string.slice(1);

    //checking firstchar mei sapce ya tab toh nhi
    if (firstChar === " " || firstChar === '\t') {
        return recursiveRemoveTabsAndSpaces(restOfString); //retun mei same funtion call with rest of the string.
    }
    return firstChar + recursiveRemoveTabsAndSpaces(restOfString);
}

console.log(recursiveRemoveTabsAndSpaces("sahil     sharma"));