//leetocde problem on connected Island count in graph
//we will use DFS and when exit will increse the count

const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function connectedIsland(graph) {
    const visited = new Set();
    let count = 0;

    //making dfs function
    function dfs(node) {
        if (!visited.has(node)) {
            visited.add(node);

            //neighbours
            for (const neigbour of graph[node]) {
                dfs(neigbour);
            }
        }
    }


    //loop inn obj
    for (const node in graph) {
        if (!visited.has(node)) {
            //DFS chala denge
            dfs(node);
            //DFS ke baad count increase kr denge
            count++;
        }
    }

    return count;
}