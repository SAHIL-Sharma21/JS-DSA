//leetocde finding shortest path between start and dest.
//It is undirected graph and we have to convert it into directed graph

//phlele edges hoti hai
const edges = [
    ["a", "b"],
    ["b", "c"],
    ["c", "d"]
]


//funtion to make graph from the edges.
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


function shortestPath(edges, start, dest) {
    //first we will make graph
    const graph = createGraph(edges);

    //now we will BFS
    const queue = [[start, 0]];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const [node, distance] = queue.shift();//2 values shift hongi node and distance

        if (node === dest) {
            return distance;
        }

        //node nhi mila toh process the child
        for (const neigbour of graph[node]) {
            if (!visited.has(node)) {
                visited.add(neigbour);
                queue.push([neigbour, distance + 1]);
            }

        }
    }
}   