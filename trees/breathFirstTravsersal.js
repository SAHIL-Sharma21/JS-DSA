//code for breadth first traversal
//printing the trees levele wise

//this is how our node looke like
// class Node {
//     constructor(key){
//         this.key = key;
//         this.left = null;
//         this.right - null;
//     }
// }


const breathFirstSearch = (root) => {
    if (root === null) {
        return []; //return empty array or m,essage
    }

    let queue = [root];
    let value = [];

    while (queue.length > 0) {
        const node = queue.shift(); //point of optimazation;
        value.push(node.key);

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return value;
}
