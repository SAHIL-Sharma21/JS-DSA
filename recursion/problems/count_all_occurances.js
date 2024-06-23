//count all occurances in an array
// [1, 2, 3, 2, 4, 2, 6, 4, 2]
// key = 2


//iterastiver way top find the occurancers

function countOccurances(arr, key) {
    if (arr.length === 0) return "array is empty"

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            count++;
        }
    }
    return count;
}

let arr = [1, 2, 3, 2, 4, 2, 6, 4, 2];
// console.log(countOccurances(arr, 2))

//using recusrion
function recursiveCountKey(arr, key, index = 0) {
    if (index >= arr.length) { //index atleast greater and equal array ki length ke hoga
        return 0;
    }

    // return (arr[index] === key ? 1 : 0) + recursiveCountKey(arr, key, index + 1);

    //using if elae
    if (arr[index] === key) {
        return 1 + recursiveCountKey(arr, key, index + 1);
    } else {
        return 0 + recursiveCountKey(arr, key, index + 1);
    }
}
console.log(recursiveCountKey(arr, 2))