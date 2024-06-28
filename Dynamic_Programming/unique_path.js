//unique path problem usinf DP
//same sa graph travsersal and bit of restriction on travelling for the robot

function uniquePath(grid, row = 0, col = 0, memo = {}) {
    //row = 0, col = 0 i.e robot at pt(0, 0);

    const pos = row + ',' + col;

    //out of check
    if (
        row >= grid.length ||
        col >= grid[0].length ||
        grid[row][col] === 'X' // X or Wall or snake
    ) {
        return 0;
    }

    //check if you have arrived at given location
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return 1;
    }

    //return the cache/ memo result
    if (pos in memo) {
        return memo[pos];
    }

    //for unwinding
    // memo[pos] = uniquePath(grid, row + 1, col, memo) + uniquePath(grid, row, col + 1, memo);

    //can be done by this also
    const rightPaths = uniquePath(grid, row + 1, col, memo);
    const bottomPaths = uniquePath(grid, row, col + 1, memo);

    memo[pos] = rightPaths + bottomPaths;

    return memo[pos];
}