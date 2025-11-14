class MyStack {
    constructor() {
        this.stack = []
    }
}

MyStack.prototype.add = function(value) {
    this.stack.push(value)
}

MyStack.prototype.get = function() {
    return this.stack[this.stack.length - 1]
}

const myStack = new MyStack()

myStack.add(1)
myStack.add(2)
myStack.add(3)

let elem = myStack.get()

console.log(myStack)