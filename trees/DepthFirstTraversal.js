//import topic of depth first trraversal

// class Node {
//     constructor(keyt) {
//         this.key = this.key;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BSTTree {
//     constructor() {
//         this.root = null;
//     }
// }


//function for DFT
//below is the iterative apprach
const depthFirstTravsersal = (root) => {

    let value = [];
    let stack = [root];

    if (root === null) {
        return value;
    }

    while (stack.length > 0) {
        const node = stack.pop();
        value.push(node.key);

        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return value;
}

//same algortithm but using recursive
const recursiveDepthFirstTraversal = (root) => {
    if (root === null) {
        return [];
    }

    //recursively
    const leftValues = recursiveDepthFirstTraversal(root.left);
    const rightValues = recursiveDepthFirstTraversal(root.right);

    // return [root.key, leftValues, rightValues];
    //example output will be [a, [b, c, d], [e, f ,g]];

    return [root.key, ...leftValues, ...rightValues];
    //output will be [a, b, c, d, e, f, g];
}