//writing our 1st sorting algo which is bubble sort


//helper function for swapping
function swap(array, i) {
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
}


function bubbleSort(array) {
    let isSwaped;

    do {
        isSwaped = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                // const temp = array[i];
                // array[i] = array[i + 1];
                // array[i + 1] = temp;
                swap(array, i);
                isSwaped = true;
            }
        }
    } while (isSwaped);
    return array;
}


const array = [4, 1, 5, 3, 2];
console.log(bubbleSort(array));