//Merge sort algorithm 


//code for breaking the arr
function mergeSort(array) {
    //base case
    if (array.length === 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}



//code for merge
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;


    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(mergeSort(arr));