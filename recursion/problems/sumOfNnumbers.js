//sum of n numbers using recursion

//below is iterative approach
function sumOfNNumbers(num) {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumOfNNumbers(5));


//solving by recusion
function recursiveSum(num) {

    if (num === 1) {
        return 1;
    }

    return num + recursiveSum(num - 1);
}
console.log(recursiveSum(5));