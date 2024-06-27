//problem to give min and max island in the grid

/*
Write a function, minIsland, that takes in a grid containig Ws and Ls. W represnts Water and L represents Land.
The funtion should return  the size of the smallest island.
An island is a verticlly and horizontally  connected region of land.
*/


function minIslandSize(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();

    let samllestSize = Infinity;

    //making explore size
    function exploreSize(r, c) {
        const pos = r + ',' + c;
        //base condition for out of bound
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            visited.has(pos)
        ) {
            return 0; //returing 0 for size
        }

        visited.add(pos);

        let size = 1; //atleast 1 size to hoga

        //calling for each neighbour and adding it with size.
        size += exploreSize(r + 1, c);
        size += exploreSize(r - 1, c);
        size += exploreSize(r, c + 1);
        size += exploreSize(r, c - 1);

        return size;
    }

    //way to go on each row and coloumn
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                //makingmethod which will retun the size 
                const size = exploreSize(r, c);

                //compare to the smallestsize variable
                if (size < samllestSize) {
                    samllestSize = size;
                }
            }
        }
    }
    return samllestSize;
}


//maximum island grid count
function maxIslandSize(grid) {
    //todo
    const visited = new Set();
    let maxSize = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    //making function for traversing
    function exploreSize(r, c) {
        const pos = r + ',' + c;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === "W" ||
            visited.has(pos)
        ) {
            return 0
        }

        let size = 1;

        visited.add(pos);

        size += exploreSize(r + 1, c);
        size += exploreSize(r - 1, c);
        size += exploreSize(r, c + 1);
        size += exploreSize(r, c - 1);

        return size;
    }


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "L" && !visited.has(r + ',' + c)) {
                const maxIslandSize = exploreSize(r, c);
                if (maxIslandSize > maxSize) {
                    maxSize = maxIslandSize;
                }
            }
        }
    }
    return maxSize;
}