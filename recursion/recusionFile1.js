//recurion code understanding

function printNumber(min, max) {
    if (min > max) {
        return;
    }

    printNumber(min + 1, max);
    console.log(min);
}

printNumber(1, 5);

function printNum(min, max) {
    if (min > max) {
        return;
    }
    console.log(min);
    printNum(min + 1, max);
}
// printNum(1, 5);