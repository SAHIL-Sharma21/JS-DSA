//sorting algo of quick Sort

function partition(arr, low, high) {
    let pivot = arr[high];

    let i = low - 1;


    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            //swap
            [arr[i], arr[j]] = [arr[j], arr[i]]; // new way to swap in array.
        }
    }

    //final swap of pivot and ith value
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; //that index
}


function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);

        //leftside
        quickSort(arr, low, pivotIndex - 1);

        //right side
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(quickSort(arr));