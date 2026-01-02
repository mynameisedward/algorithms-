// Основная идея: Min heap

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;

    for(let num of nums) {
        this.heap.enqueue(num)
        if(this.heap.size() > k) {
            this.heap.dequeue()
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val)
    while(this.heap.size() > this.k) {
        this.heap.dequeue()
    }
    return this.heap.front( )
};

// repeat