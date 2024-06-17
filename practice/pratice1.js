// practicing the linked list and making it method

//Linked is custom data structure and can be made by using class

//making node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//makikng empty linked list
class LinkedList {
    constructor() {
        this.head = null;
    }


    //making methods in LL which can perform certain task

    // 1) adding node ata the start of the Linked list
    insertAtStart(data) {
        //making node first
        let node = new Node(data);
        this.head = node;
        return this.head;
    }

    // 2) insert at the end
    insertAtEnd(data) {
        //making node
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        return current.next = newNode;
    }

    //3) delete fromm the start
    deleteFromStart() {
        if (!this.head) {
            console.log("Linked list is empty");
            return;
        }
        this.head = this.head.next;// move the head to the next node.
    }

    //4) mdelete from the last
    deleteFromEnd() {
        if (!this.head) {
            console.log("Linked list is empty");
            return;
        }

        //if ther is only one node. then point its head to null.
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    //5) insert at the given node, user will give prev node and data
    insertAtNode(prevNode, data) {

        if (!prevNode) {
            console.log("prev node is not given");
            return;
        }
        //making new node its next will point to the prevnode next
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
        return;
    }

    //6) delete by a key
    deleteByKey(key) {
        if (!key) {
            console.log("key not provided");
            return;
        }

        if (!this.head) {
            console.log("LL is empty");
            return;
        }

        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        return "No node found with the key"
    }

    //7) search in LL
    search(key) {
        if (!key) {
            console.log("key not provided");
            return false;
        }

        if (!this.head) {
            console.log("LL is empty!");
            return;
        }

        let current = this.head;
        while (current) {
            if (current.data === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    //8) print linked list
    print() {
        if (!this.head) return "No linkelist is present";

        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + "->"
            current = current.next;
        }
        // console.log(result.slice(0, -2));
        return result.slice(0, -2);
    }

    //9) reverse a linked list -- most important for the interview.
    reverse() {
        if (!this.head) {
            console.log("LL is empty!");
            return;
        }

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
        return;
    }

}

const list = new LinkedList();
list.insertAtStart(4);
list.insertAtStart(2);
list.insertAtEnd(8);
list.insertAtEnd(10);
list.insertAtEnd(14);

console.log("Original linked list:");
console.log(list.print());

//seraching
console.log(list.search(8));

// console.log(list.insertAtNode(8, 9));

