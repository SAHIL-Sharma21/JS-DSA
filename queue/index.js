//implemnting queue usingjs

class Queue {
    constructor() {
        this.queue = []; //queue hamara array hi hai
    }


    //adding element in queue
    enqueue(data) {
        this.queue.push(data);
    }

    //removing element
    //Deque
    dequeue() {
        //edge case
        if (this.isEmpty()) {
            return 'Queue is empty.'
        }
        return this.queue.shift();
    }

    //edge case if our queue is empty then below is the method
    isEmpty() {
        return this.queue.length === 0;
    }

    //peak element in queue
    peak() {
        if (this.isEmpty()) {
            return "Queue is empty!"
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

    //printing the queue
    printQueue() {
        let queue = "";
        for (let i = 0; i < this.queue.length; i++) {
            queue += this.queue[i] + '\n';
        }
        return queue;
    }
}


//USUAGE
const queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(10);
queue.enqueue(1);
queue.enqueue(4);
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.peak());
console.log(queue.printQueue());
console.log(queue.isEmpty());
console.log(queue.size());