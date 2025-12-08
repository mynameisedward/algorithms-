// Основная идея: doubly-linked-list как кэш
//                HashMap как хранение значений     


class Node {
    contructor(value) {
        this.val = value;
        this.key = null;
        this.next = null;
        this.prev = null;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.data = new Map()

    this.head = new Node('head')
    this.tail = new Node('tail')

    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype.remove = function(node) {
    // просто удаляем ноду
    node.prev.next = node.next
    node.next.prev = node.prev
}

LRUCache.prototype.addAfterHead = function(node) {
    // просто аккуратно добавляем ноду после головы
    const head_next = this.head.next
    
    this.head.next.prev = node
    this.head.next = node

    node.next = head_next
    node.prev = this.head
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!(this.data.has(key))) {
        return -1
    }

    let node = this.data.get(key)

    this.remove(node)
    this.addAfterHead(node)
    
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.data.has(key)) {
        const node = this.data.get(key)
        this.remove(node)
        this.addAfterHead(node)
        node.value = value
        return
    }
    if(this.data.size >= this.capacity) {
        const node = this.tail.prev
        this.remove(node)
        this.data.delete(node.key)
    }

    let newNode = new Node(value)
    newNode.key = key

    this.addAfterHead(newNode)
    this.data.set(key, newNode)

    return
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// repeat