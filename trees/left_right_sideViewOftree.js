/left side view of a BST
const leftSideView = (root) => {
    if (root === null) return [];

    let queue = [root];
    let leftSize = [];

    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (i == 0) {
                leftSize.push(node.data);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return leftSize;
}


//right view of the BST
const rightSideView = (root) => {
    if (root === null) {
        return [];
    }

    let queue = [root];
    let rightView = [];


    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (i === size - 1) {
                rightView.push(node.data);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return rightView;
}
