//doubley linkled list

//making node first
class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtStart = function (data) {
    const newNode = new Node(data, this.head, null);

    if (this.head !== null) {
        this.head.prev = newNode;

    }
    this.head = newNode;

    if (this.tail === null) {
        this.tail = newNode;
    }
}

//adding at the end
DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {
        this.tail.next = newNode;
    }
    this.tail = newNode;

    if (this.head === null) {
        this.head = newNode;
    }

}

//insert at the given node
DoublyLinkedList.prototype.insertAfterGivenNode = function (prevNode, data) {
    if (prevNode) {
        console.log("Invcalid prev node");
        return;
    }

    // making node
    const newNode = new Node(data, prevNode.next, prevNode);

    if (prevNode.next !== null) {
        prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;

    //tail
    if (newNode.next === null) {
        this.tail = newNode;
    }
}

//deleting the first node at LL
DoublyLinkedList.prototype.deleteAtFirst = function () {
    if (!this.head) {
        console.log("Doubly linked list is not present");
        return;
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
}

//deleting the last node in LL
DoublyLinkedList.prototype.deleteAtLast = function () {
    if (!this.tail) {
        return "LL is not present"
    }

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

//reversing the Doubly Linked List
DoublyLinkedList.prototype.reverse = function () {
    if (!this.head) {
        return "LL did not present";
    }

    let temp = null;
    let current = this.head;
    while (current) {
        //swapping
        temp = current.prev
        current.prev = current.next;
        current.next = temp

        //move the current
        current = current.prev
    }

    if (this.tail !== null) {
        //swapping tail
        this.tail = this.head;
        this.head = temp.prev;
    }
}

//added method change the postionn of next and prev
//find the key in DLL
    seacrh(key) {
        if (!key) {
            return "Key not provided"
        }

        if (this.head === null) {
            return " DLL is empty!"
        }

        if (this.head.data === key || this.tail.data === key) {
            return true;
        }

        let current = this.head;
        while (current !== null) {
            if (current.data === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    //printing the list
 print() {
        if (!this.head) {
            return "DLL is empty!"
        }

        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' <=> ');
    }
