class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}


class RecentCounter {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
};

RecentCounter.prototype.addToRight = function (value) {
    this.size += 1
    let newNode = new Node(value)
    if (!this.head && !this.tail) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
}

RecentCounter.prototype.popFromLeft = function () {
    this.size -= 1 
    if (this.head.next) {
        this.head = this.head.next
    }
}



/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.addToRight(t)
    let window_start = t - 3000
    console.log(t)
    console.log(this.head.value)
    while((this.size > 0) && (this.head.value < window_start)) {
        this.popFromLeft()
    }
    return this.size
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */