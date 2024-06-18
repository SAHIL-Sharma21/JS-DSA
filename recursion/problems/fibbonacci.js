//dolvingg fibbonaci number problems using iterative and recursive apprach

function fibboNum(num) {

    let n0 = 0;
    let n1 = 1;

    for (let i = 0; i < num; i++) {
        let temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    return n0;
}



//solvinf recursive way
function recursiveFibbo(num) {
    // if (num === 0) {
    //     return 0;
    // }
    // if (num === 1) {
    //     return 1;
    // }
    if (num <= 1) {
        return num;
    }
    return (recursiveFibbo(num - 2) + recursiveFibbo(num - 1));
}

console.log(fibboNum(6));