//leetcode problem on find first occurance  using both iterativer adn recursive way

//problem
//arr = [3, 4, 1, 8, 1, 7];
// findMe = 1
//currentIndex = 0
//output - 2;
//if not found return -1

//iterative
function firstOccurance(arr, findMe, currIndex) {

    // for (let i = currIndex; i < arr.length; i++) {
    //     if (arr[i] === findMe) {
    //         return i;
    //     }
    // }
    // return -1;

    while (currIndex < arr.length) {
        if (arr[currIndex] === findMe) {
            return currIndex;
        }
        currIndex++;
    }
    return -1;
}
// const arr = [3, 4, 1, 8, 1, 7];
// const findMe = 1;
// console.log(firstOccurance(arr, findMe, 0));

//solving by recursive way
function recuresiveFirstOcc(arr, findMe, currIndex) {

    //base case
    if (arr.length === currIndex) {
        return -1; //pora array itearte kr liya an value nhi mili toh
    }

    if (arr[currIndex] === findMe) {
        return currIndex;
    }

    return recuresiveFirstOcc(arr, findMe, currIndex + 1);
}

const arr = [3, 4, 1, 8, 1, 7];
const findMe = 1;
console.log(recuresiveFirstOcc(arr, findMe, 0));