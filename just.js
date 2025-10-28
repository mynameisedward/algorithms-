
// var Node = function(val) {
//     this.value = val;
//     this.next = null;
// }


var MyLinkedList = function() {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    this.Node = Node;
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if((index < 0) || (index >= this.size)) {
        return -1
    }

    let current = this.head

    for(let i = 0; i < index; i++) {
        current = current.next
    }

    return current.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new this.Node(val)

    if(this.size === 0) {
        this.head = node
        this.tail = node
    } else {
        node.next = this.head
        this.head = node
    }

    this.size += 1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new this.Node(val)

    if(this.size == 0) {
        this.head = node
        this.tail = node
    } else {
        this.tail.next = node
        this.tail = node
    }

    this.size += 1

    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if((index < 0) || (index >= this.size)) return
    if (index === 0) return this.addAtHead(val);

    let node = new this.Node(val)

    current = this.head 

    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }

    link = current.next 
    current.next = node
    node.next = link


    this.size += 1
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if((index < 0) || (index >= this.size)) {
        return
    }
    if(index === 0) {
        this.head = this.head.next
    } else {
        let current = this.head
        for(let i = 0; i < index - 1; i++) {
            current = current.next
        }
        current.next = current.next.next

    }
    this.size -= 1
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */