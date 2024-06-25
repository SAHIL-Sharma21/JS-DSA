//problem to convert undirected graph to directed graph and then applyuing tha algorithm

/*

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
]

//alwyas assume there is cycle

//we can make it like this
constb graph = {
    b: [a, c],
    a: [b, c],
    c: [a, b]
}

//method
loop => check if key DOES NOT EXIST then add key => push both node

Write a function, undirectedpath, that takes  in an array of edges for an undirected graph and two nodes,

afte rthat you can find the node path etc.
take care of cycle via visted technique.

*/

// function for making graph
function createGraph(edges) {
    const graph = {};

    //looping throgh the edges
    for (const edge of edges) {
        const [a, b] = edge; // array destructure

        //if a nhi hia toh add krna hjia
        if (!(a in graph)) {
            graph[a] = [];
        }

        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


function finalFunctionBundle(edges, start, dest) {
    const graph = createGraph(edges);
    return hasPathDFS(graph, start, dest);
}




//find path in the key
const hasPathDFS = (graph, start, dest) => {
    const stack = [];
    const visited = new Set();

    if (start === dest) return true;

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);

            for (const neighbour of graph[node]) {
                stack.push(neighbour);
            }
        }
    }
    return false;
}
