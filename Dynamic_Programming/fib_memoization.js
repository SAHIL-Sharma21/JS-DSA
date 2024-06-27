//solving fibonacci series in dp using memoization

//function with memo
//memo ek tarh ka cache hi bna liya hai.. 

function fiboMemo(num, memo = {}) {
    //age you num hamare memo mei hia toh return kr denge
    if (num in memo) return memo[num];

    //base case
    if (num <= 1) return num;

    memo[num] = fiboMemo(num - 1, memo) + fiboMemo(num - 2, memo);

    return memo[num];
}


//tribbonacci
//T0 = 0, T1 = 1, T2 = 1
//Tn+3 = Tn + Tn+2

function tribbonacci(num, memo = {}) {
    if (num in memo) return memo[num];

    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    memo[num] = tribbonacci(num - 1, memo) + tribbonacci(num - 2, memo) + tribbonacci(num - 3, memo);

    return memo[num];
}