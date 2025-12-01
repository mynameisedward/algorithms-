class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

var FrontMiddleBackQueue = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    let newNode = new Node(val)
    if(this.size === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    this.size += 1
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let newNode = new Node(val)
    if(this.size === 0) {
        this.tail = newNode
        this.head = newNode
    } else {
        let index = Math.floor(this.size / 2) - 1
        let current = this.head
        for(let i = 0; i < index; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next.prev = newNode
        newNode.prev = current
        current.next = newNode
    }
    this.size += 1
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    let newNode = new Node(val)
    if(this.size === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    this.size += 1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    
    if(this.size === 0) {
        return -1
    }

    let result = this.head.val

    this.head = this.head.next
    this.head.prev = null

    this.size -= 1

    return result
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.size === 0) {
        return -1
    } else if(this.size === 1) {
        let result = this.head.val
        this.head = null
        this.tail = null
        this.size -= 1
        return result
    } else if(this.size === 2) {
        let result = this.head.val
        this.head = this.tail
        this.head.prev = null
        this.size -= 1
        return result
    }

    const middleIndex = Math.floor(this.size / 2) - 1

    let current = this.head
    let result
    for(let i = 0; i < middleIndex; i++) {
        current = current.next
    }
    result = current.next.val
    current.next.next.prev = current
    current.next = current.next.next

    this.size -= 1

    return result
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(this.size === 0) {
        return -1
    } else if(this.size === 1) {
        let result = this.tail.val
        this.tail = null
        this.head = null
        this.size -= 1
        return result
    }
    let result = this.tail.val

    this.tail = this.tail.prev
    this.tail.next = null

    this.size -= 1

    return result
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */