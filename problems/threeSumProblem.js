//solving three sum problem with Breadth first seacrh

const treeSumByBreadthFirstSeacrh = (root) => {
    if (root === null) {
        return 0;
    }

    let queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        const node = queue.shift();

        sum += node.key; // will retun the total sum at the end;

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return sum;
}


//solving by deapth first search

const threeSumByDepthFirstSearch = (root) => {
    if (root === null) {
        return 0;
    }

    let stack = [root];
    let sum = 0;

    while (stack.length > 0) {
        const node = stack.pop();

        sum += node.key;

        if (stack.right !== null) {
            stack.push(node.right);
        }
        if (stack.left !== null) {
            stack.push(node.left);
        }
    }
    return sum;
}

//slving with recusion with depth 
const threeSum = (root) => {
    if (root === null) {
        return 0;
    }

    return root.key + threeSum(root.left) + threeSum(root.right);
}
