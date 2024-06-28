//leetcode
//house robber problem
//non adjacent

function houseRobber(nums, i = 0, memo = {}) {
    if (i in memo) return memo[i];

    //out of bound
    if (i >= nums.length) return 0;

    //2 case for take and skip i.e max  --> right and left part
    const skip = houseRobber(nums, i + 1, memo);
    const take = nums[i] + houseRobber(nums, i + 2, memo);

    memo[i] = Math.max(skip, take);

    return memo[i];
}

//house robber for low money not the maximum 
function lowMoneyRobber(nums, i = 0, memo = {}) {
    if (i in memo) return memo[i];

    if (i >= nums.length) return 0;

    const skip = lowMoneyRobber(nums, i + 1, memo);
    const take = nums[i] + lowMoneyRobber(nums, i + 2, memo);

    memo[i] = Math.min(skip, take);

    return memo[i];
}



//solution of leetcode
const rob = function (nums) {
    const memo = {};

    function robFrom(i) {
        if (i in memo) return memo[i];

        if (i >= nums.length) return 0;

        const take = nums[i] + robFrom(i + 2);
        const skip = robFrom(i + 1);

        memo[i] = Math.max(take, skip);

        return memo[i];
    }
    return robFrom(0);
};