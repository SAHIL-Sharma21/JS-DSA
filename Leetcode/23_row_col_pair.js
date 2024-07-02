//little bit of matrix
let grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]];

//printing coloumn
// let col = [];
// for (let j = 0; j < grid.length; j++) {
//     for (let i = 0; i < grid.length; i++) {
//         col.push(grid[i][j]);
//     }
// }
// console.log(col);

// //printing row
// let row = [];
// for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//         row.push(grid[i][j]);
//     }
// }
// console.log(row);

/*
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
*/

var equalPairs = function (grid) {
    //using map
    const n = grid.length;

    const rowMap = new Map();

    for (let i = 0; i < n; i++) {
        const rowStr = grid[i].join(',');
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }

    let count = 0;

    //coverting col into string
    for (let j = 0; j < n; j++) {
        let colArr = [];
        for (let i = 0; i < n; i++) {
            colArr.push(grid[i][j]);
        }
        const colStr = colArr.join(",");
        if (rowMap.has(colStr)) {
            count += rowMap.get(colStr)
        }
    }
    return count;
};
