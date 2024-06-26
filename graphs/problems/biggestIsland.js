//follow up question for connected Island
//finding the biggest Island

function biggestIsland(graph) {

    const visited = new Set();
    let largest = 0;

    function dfs(node) {
        //if visited hai toh return 0 kr denge
        if (visited.has(node)) {
            return 0;
        }

        visited.add(node);
        let size = 1;

        //neighbour find
        for (const neigbour of graph[node]) {
            size += dfs(neigbour);
            // size = size + dfs(neigbour);
        }
        return size;
    }

    //iterate over graph
    for (const node in graph) {
        if (!visited.has(node)) {
            const componentSize = dfs(node); //cs milega after dfs
            if (componentSize > largest) {
                largest = componentSize;
            }
        }
    }

}