//question 1 of directed paths

/*
Given two node (start and dest) in a directed acyclic graph (DAG), return true if there is a directed Path from start to dest, otherwise return false

Example 1:
Input: satrt = 1, dest = 3
output: true
explanation: There is one diretcd path 1-> 2-> 3

Example 2:
Input: start = 1, dest = 4
output: false
explanation: there is no direted path from 1 to  4
*/

//we can solve using DFS and BFS

function hasPathDFS(graph, start, dest) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        //case 1
        if (node === dest) {
            return true;
        }

        if (!visited.has(node)) {
            visited.add(node);

            //ab iske neighbout pta karunga
            for (const neighbour of graph[node]) {
                stack.push(neighbour);
            }
        }
    }
    return false; //dest not found 
}

//using BFS
const hasPathBFS = (graph, start, dest) => {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === dest) {
            return true;
        }

        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                queue.push(neighbour);
            }
        }
    }
    return false;
}

//one more method using recursion
function hasPathRecur(graph, start, dest, visited = new Set()) {
    if (start === dest) return true;

    if (visited.has(start)) {
        return false;
    }
    visited.add(start);

    for (const neighbour of graph[start]) {
        if (hasPathRecur(graph, neighbour, dest) === true) {
            return true
        }
    }
    return false;
}