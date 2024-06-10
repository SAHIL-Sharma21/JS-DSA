//implenting stack data structure if asked in interview

class Stack {
    constructor() {
        this.stack = []
    }

    //adding push functionality
    push(data) {
        this.stack.push(data);
    }

    //adding pop method
    pop() {
        this.stack.pop();
    }

    //peek mwthod - which we retutn the last element at the top of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    //method which return true or false if stack is empty.
    isEmpty() {
        return this.stack.length === 0;
    }

    //size of the stack
    size() {
        return this.stack.length;
    }

    //clear the stack
    clear() {
        this.stack = [];
    }

    //if that element present in stack
    contains(value) {
        return this.stack.includes(value);
    }

    //reversing the stack
    reverse() {
        this.stack.reverse();
    }

    //most common print the stack
    printStack() {
        let stackValue = "";
        for (let i = 0; i < this.stack.length; i++) {
            stackValue += this.stack[i] + "\n"
        }
        return stackValue;//returing the string data type here.
    }
}

//usuage example

let myStack = new Stack();

myStack.push(8);
myStack.push(3);
myStack.push(2);
myStack.push(10);
myStack.pop();
console.log(myStack);
console.log(myStack.contains(3));
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.reverse());
console.log(myStack.printStack());