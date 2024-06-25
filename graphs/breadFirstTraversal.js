//writing breadth first search in graph

// const graph = {
//     a: ['b', 'c'],
//     b: ['a', 'c', 'd'],
//     c: ['a', 'b', 'd'],
//     d: ['b', 'c'],
//     e: ['f'],
//     f: ['e']
// }


//we use Queue ds in breath first search
function breadthFirstSearch(graph, start) {
    //making queue
    const queue = [start];
    const visited = new Set([start]);
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        //neighbour ki chinta
        for (const neighbour of graph[node]) {
            //visit kiya hai ya nahi
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour);
            }
        }
    }
    return result;
}

const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

console.log(breadthFirstSearch(graph, "c"));