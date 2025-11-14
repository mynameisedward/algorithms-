class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class MyStack {
    constructor() {
        this.head = null
    }
}

MyStack.prototype.add = function(value) {
    if(this.head == null) {
        this.head = new Node(value)
    }
    let newNode = new Node(value)
    newNode.next = this.head

    this.head = newNode
} 

MyStack.prototype.get = function() {
    return this.head.value
}

let stack = new MyStack()

stack.add(1)
stack.add(2)
stack.add(3)

let elem = stack.get()

console.log(elem)