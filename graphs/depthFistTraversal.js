// depth first travsrsal in graphs using iteravtive and recusive approach

// //making sample graph
// const graph = {
//     a: ['b', 'c'],
//     b: ['a', 'c', 'd'],
//     c: ['a', 'b', 'd'],
//     d: ['b', 'c'],
//     e: ['f'],
//     f: ['e']
// }


//depth first search --> iterative
function depthFirstSearch(graph, start) {

    //dfs uses stack and for visited node we use set for thet
    const stack = [start];
    const visited = new Set();
    let result = [];

    while (stack.length > 0) {
        const node = stack.pop();

        //checking if we visited this node
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            //using for of loop to get its neighbout
            for (const neighbour of graph[node]) {
                if (!visited.has(neighbour)) {
                    stack.push(neighbour);
                }
            }
        }
    }
    return result;
}


//recursive appraoch
//start ko node bhi bol skte hai.
function depthFSR(graph, start, visited = new Set(), result = []) {
    //we will check here
    if (!visited.has(start)) {
        visited.add(start);
        result.push(start);
        //for its neighbour
        for (const neighbour of graph[start]) {
            console.log(neighbour);
            depthFSR(graph, neighbour, visited, result);
        }
    }
    return result;
}

// const graph = {
//     a: ['b', 'c'],
//     b: ['a', 'c', 'd'],
//     c: ['a', 'b', 'd'],
//     d: ['b', 'c'],
//     e: ['f'],
//     f: ['e']
// }
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: []
};
console.log(depthFSR(graph, "a"));
// console.log(depthFirstSearch(graph, "b"));
