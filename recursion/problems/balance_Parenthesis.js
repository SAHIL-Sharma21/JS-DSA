//leetcode problem on balance parenthesis

// input= ["(", "(", ")", ")", "(", ")"]

function balanceParenthesis(arr, startIndex = 0, currentIndex = 0) {
    if (startIndex === arr.length) {
        return currentIndex === 0;
    }

    //satrting mei ending brackert aa gya toh
    if (currentIndex < 0) {
        return false;
    }

    if (arr[startIndex] === "(") {
        return balanceParenthesis(arr, startIndex + 1, currentIndex + 1);
    } else if (arr[startIndex] === ")") {
        return balanceParenthesis(arr, startIndex + 1, currentIndex - 1);
    } else {
        return false;
    }
}

// let arr = ["(", "(", ")", ")", "(", ")"];
// console.log(balanceParenthesis(arr));

//using stack fot iteartive mrthod
function parenthesisBalance(arr) {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            stack.push(arr[i]);
        } else if (arr[i] === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

// let arr = ["(", "(", ")", ")", "(", ")"];
// console.log(parenthesisBalance(arr));


//diferent varients
//input - ["(", "{", "}", ")", "[", "]"]

function balance(arr) {
    let stack = [];

    let matchingBracket = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            stack.push(arr[i]);
        } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
            if (stack.length === 0 || stack.pop() !== matchingBracket[arr[i]]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
let arr = ["(", "{", "}", ")", "[", "]"];
console.log(balance(arr));
