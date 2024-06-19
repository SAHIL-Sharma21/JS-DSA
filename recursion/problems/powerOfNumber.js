//power of number with base and exponent

//recursive way
function powerOfNumber(num, pow) {
    if (pow === 0) {
        return 1;
    }

    return num * powerOfNumber(num, pow - 1);
}
console.log(powerOfNumber(2, 6));