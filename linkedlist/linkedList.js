//implenting our linkedlist in this code file.

//initially we will create node first

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//making linkedlist
class LinkedList {
    constructor() {
        this.head = null; //head null ko point kr rha hai toh empty hai linkedlist
    }

    deleteKey(key) {
        if (!this.head === null) {
            console.log("Linked list is empty!")
            return;
        }

        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

     //mid of the linked list -> using tortise and hare algorithm
    middle() {
        if (this.head === null) {
            return 'Linked list is empty'
        }

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next
        }
        return slow.data;
    }

    //detech cycle in Linked list using same algo
    cycle() {
        if (this.head === null) {
            return " Linked List is empty"
        }

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    //remove duplicate from the linked list
    removeDuplicate() {
        if (this.head === null) {
            return "Linked list is empty!"
        }

        let current = this.head;

        while (current.next !== null && current !== null) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}

//making method to Insert the element in the linkedlist
LinkedList.prototype.insertAtBeginning = function (data) {
    //making node first
    const newNode = new Node(data);
    //now add above node to head
    return this.head = newNode;
}

//Important
//Insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
    //convert to node
    const newNode = new Node(data);


    if (!this.head) {//if head null hai kya  -->  null convert to false to !false gives us true
        this.head = newNode;
        return;
    }

    //if head null nhi hai to assunme kr lenge ki woh last hai
    let last = this.head;
    //verfiy krenge head last hai toh
    while (last.next) {//age null nikla to last ko update kre denge null hamara false hi hai
        last = last.next;
    }
    last.next = newNode;
}


//insert at given point in linkedlist
LinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
    //create a new node with prev node and data
    if (!prevNode) {
        console.log("The given PrevNode cannot be null");
        return;
    }

    //creating a new node with data and previou node ka next daalenge and then prevNode ke next ko new node pr point kr denge
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
    // return newNode;
}


//delete the first node from the linkelist
LinkedList.prototype.deleteAtFirstNode = function () {
    //if head hai hi nahi.
    if (!this.head) {
        return;
    }
    return this.head = this.head.next
}

//delete the last node from linkedlist -- > (second last node )
LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return; //nothing to delete if list is empty
    }

    if (!this.head.next) {
        this.head = null; //if there is only one node
        return;
    }

    //main case using second last
    let secondLast = this.head;
    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;
}


//leetcode problem delete with key
LinkedList.prototype.deleteByKey = function (key) {
    //if list is empty
    if (!this.head) {
        console.log("list is empty");
        return;
    }

    //if key head pr mil gyi
    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }

    //travese krna hai poori linkelist pr
    let current = this.head;

    while (current.next !== null) {
        if (current.next.data === key) {
            //delete krna hia agr key mil gyi
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
    console.log("No node found with key", key);
}

//search and traverse a linked list
//search operation in linkedlist
LinkedList.prototype.search = function () {
    let current = this.head;

    while (current) {
        if (current.data === key) { //search krne ke liye data se compare kr rahe hai.

            return true;
        }
        current = current.next;
    }
    return false;
}


//traversal in linkedlist -- printing
LinkedList.prototype.printList = function () {
    let current = this.head;

    let listValues = [];
    while (current) {
        listValues.push(current.data); //if current hai to data kolist mei push kr dia.
        current = current.next //moves to next point
    }
    return listValues.join("->");
}


//reversing a linkedlist
LinkedList.prototype.reverse = function () {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}



}

//learning usage below
const mylinkedList = new LinkedList();
mylinkedList.addAtFront(5);
mylinkedList.addAtEnd(6);
mylinkedList.addAtEnd(7);
console.log(mylinkedList.print());
mylinkedList.reverse();
mylinkedList.addAtEnd(8);
console.log(mylinkedList.print());
console.log(mylinkedList.search(8));
console.log(mylinkedList.search(9));

const headNode = mylinkedList.head;
console.log(mylinkedList.insertAtGivenNode(7, headNode));
console.log(mylinkedList.print());

console.log(mylinkedList.deleteByKey(7));
console.log(mylinkedList.print());
mylinkedList.addAtEnd(9);
console.log(mylinkedList.middle());
