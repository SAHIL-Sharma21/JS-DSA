//solving fib and trib with tabulation
function fibTabulation(num) {
    //base case
    if (num <= 1) return num;

    const table = Array(num + 1).fill(0);

    //initializte the table 1st index with 1
    table[1] = 1;

    //for loop lgga kr krenge
    for (let i = 2; i <= num; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[num];
}

//tribbo with tabulation
function tribboTabulation(num) {

    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    const table = Array(num + 1).fill(0);

    table[1] = 1;
    table[2] = 1;

    //running the looop
    for (let i = 3; i <= num; i++) {
        table[i] = table[i - 1] + table[i - 2] + table[i - 3];
    }

    return table[num];
}