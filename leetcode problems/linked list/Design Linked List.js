class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) {
        return -1
    }

    let current = this.head
    for(let i = 0; i < index; i++) {
        current = current.next
    }
    return current.value
}

MyLinkedList.prototype.addAtHead = function(val) {
    
}
MyLinkedList.prototype.addAtTail = function(val) {

}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size) return

    this.size += 1
    const node = new Node(val)


    if(index === 0) {
        

        return
    }

    
    let current = this.head
    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }
    const old_link = current.next
    current.next = node
    node.next = old_link 
}