// famous problem in graph which is challenging 
//Grid Island count

function isLandCount(grid) {
    const rows = grid.length;
    const cols = grid[0].length;


    const visited = new Set();
    let count = 0;

    //making the dfs funtion 
    function dfs(r, c) {
        const pos = r + ',' + c;

        //Base case: return if out of bounds or water or already visited
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            !visited.has(pos)
        ) {
            return
        }

        visited.add(pos);
        //ab 4 variables ke liye dfs frse runn krenge
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    //we have to run 2 loops to get the outout
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + 'r')) { //also checking if it is not visited so we wil check by thi apprach
                count++; //increase the count
                dfs(r, c);
            }
        }
    }

    return count;
}