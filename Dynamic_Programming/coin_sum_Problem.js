//solving leetcode problem of coin sum problem

/*
"Coin Change Problem", Where you need to determine if it's possible to form a specific amount using any combination of elements 
from given set, Which can be used an unlimited number of times.

sumpossible(8, [5, 12, 4]) -> true
sumPossible(103, [6, 20, 1]) -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false
*/


function sumPossible(amt, nums, memo = {}) {

    if (amt in memo) return memo[amt];
    if (amt === 0) return true;
    if (amt < 0) return false;


    //loop
    for (let i = 0; i < nums.length; i++) {
        if (sumPossible(amt - nums[i], nums, memo)) {
            memo[amt] = true;
            return true;
        }
    }
    memo[amt] = false;
    return false;
}

// console.log(sumPossible(15, [4, 6, 10]));

//Medium level question --> Minimum coin for the sum
function minCoin(amt, coins, memo = {}) {
    if (amt in memo) return memo[amt];

    if (amt === 0) return 0;
    if (amt < 0) return -1;

    let minCoinsCount = Infinity;

    for (const coin of coins) {
        let result = minCoin(amt - coin, coins, memo);

        if (result !== -1) {
            minCoinsCount = Math.min(minCoinsCount, result + 1);
        }
    }

    //wrting verbose code
    // for (const coin of coins) {
    //     let currentCount = 1 + minCoin(amt - coin, coins, memo); //this will have zero or 1
    //     minCoinsCount = Math.min(currentCount, minCoinsCount);
    // }

    memo[amt] = minCoinsCount === Infinity ? -1 : minCoinsCount;
    return memo[amt];
}

console.log(minCoin(8, [5, 12, 4]));