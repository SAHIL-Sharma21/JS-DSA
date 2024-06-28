// follow up question for unique paths 
//need to return the maximum or minimum for the sum of the paths

function maxUniquePathSum(grid, row = 0, col = 0, memo = {}) {
    const pos = row + ',' + col;

    //out of bound
    if (row >= grid.length || col >= grid[0].length) {
        return -Infinity;
    }

    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col];
    }

    if (pos in memo) return memo[pos];

    //rightway and bottom way
    const rightWay = maxUniquePathSum(grid, row + 1, col, memo);
    const bottomWay = maxUniquePathSum(grid, row, col + 1, memo);

    memo[pos] = grid[row][col] + Math.max(rightWay, bottomWay);

    return memo[pos];
}

//same funtion for minimum sum
function minuniquePathSum(grid, row = 0, col = 0, memo = {}) {
    //making postition
    const pos = row + ',' + col;

    //checking for out of bound
    if (row >= grid.length || col >= grid[0].length) return Infinity;

    //base case - if element found
    if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];

    if (pos in memo) return memo[pos];

    const rightWay = minuniquePathSum(grid, row + 1, col, memo);
    const bottomWay = minuniquePathSum(grid, row, col + 1, memo);

    memo[pos] = grid[row][col] + Math.min(rightWay, bottomWay);

    return memo[pos];
}

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

console.log(minuniquePathSum(grid));
console.log(maxUniquePathSum(grid));