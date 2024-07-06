//algo fo rinsertion sort

function insertionSort(array) {
    //start from 2nd position kuki 1st ke left mei khuch hai nhi

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

const array = [4, 1, 5, 3, 2];
console.log(insertionSort(array));