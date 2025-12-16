// Основная идея: делаем Max Heap и убираем k - 1 элементов из корня
                // возвращаем корень
// Max Heap
function findKthLargest(nums, k) {
    const maxHeap = new MaxPriorityHeap()

    for(let num of nums) {
        maxHeap.enqueue(num)
    }
    
    for(let i = 0; i < k - 1; i++) {
        maxHeap.dequeue()
    }

    return maxHeap.front()
}




// Основная идея: делаем Min-Heap размером k и возвращаем корень
// Min Heap
function findKthLargest(nums, k) {
    const minHeap = new MinPriorityHeap()

    for(let num of nums) {
        minHeap.enqueue(num)
        if(minHeap.size() > k) {
            minHeap.dequeue()
        }
    }

    return minHeap.front()
}
