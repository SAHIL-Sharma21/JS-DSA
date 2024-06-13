//implementing custion data structure of Binary search tree.
//making node first
class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

//making BST Tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //making insert method which will be used as recursion
    insertNode(node, newNode) { //node -> root node
        //checking key and newnode if it is less than or grerater then
        if (newNode.key < node.key) { //node ke left mei jana hai
            if (node.left === null) { //add krrva denge
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode); //this is recursion.
            }
        } else { //agr key badi hai toh
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    //helper method to delete the node
    deleteNode(node, key) { //node -> root node hai
        //node null hai
        if (node === null) {
            return null;
        }

        //checking for the key
        if (key < node.key) { //left side using recusrion
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.key) { //key hamari right side mei ho toh
            node.right = this.deleteNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {//leaf node
                return null;
            } else if (node.left === null) { //node ka left null hai toh right ko return kr denge
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                let tempNode = this.findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }
        return node;
    }

    //find min node method
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}


//above is the implementation/design phase, below is adding method in it
//insertion in binaryu tree using recursion
BinarySearchTree.prototype.insert = function (key) {
    //create node
    const newNode = new BSTNode(key);

    //if root is null then we will point to new node
    if (this.root === null) {
        this.root = newNode;
    } else { //if root ki value null nhi hai
        this.insertNode(this.root, newNode);//recursive function
    }
}

//delete in BST
BinarySearchTree.prototype.delete = function (key) {
    this.root = this.deleteNode(this.root, key);
}