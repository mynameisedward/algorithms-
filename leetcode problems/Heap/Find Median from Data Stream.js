// Основная идея: делаем minHeap и maxHeap
//                       maxHeap = [******,,,,,,]
//                       minHeap = [,,,,,,******]
// Если одинаковый размер, то берем верхние элементы и считаем средний
// Если нет, то берем верхний элемент из maxHeap
// 
// Добавляем всегда в maxHeap, но!
// Делаем переливание когда 
//                         (1) Разность размеров куч больше одного
//                         (2) Рут maxHeap больше рута minHeap

var MedianFinder = function() {
    this.minHeap = new MinHeap()
    this.maxHeap = new MaxHeap() 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.insert(num)

    if(this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.insert(this.maxHeap.extractRoot())
    }
    if((this.minHeap.size() > 0) && (this.maxHeap.root() > this.minHeap.root())) {
        const minHeapRoot = this.minHeap.extractRoot()
        const maxHeapRoot = this.maxHeap.extractRoot()
        this.maxHeap.insert(minHeapRoot)
        this.minHeap.insert(maxHeapRoot)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const minHeap_size = this.minHeap.size()
    const maxHeap_size = this.maxHeap.size()

    if(maxHeap_size > minHeap_size) {
        return this.maxHeap.root()
    }
    
    return (this.minHeap.root() + this.maxHeap.root()) / 2
};