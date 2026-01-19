// Основная идея: через minHeap берем минимальный элемент и это будет следующей нодой

function mergeKLists(lists) {
    const dummy = new ListNode()
    let current = dummy

    const minHeap = new MinHeap((pair) => pair[0])
    for(let i = 0; i < lists.length; i++) {
        if(lists[i]) {
            minHeap.insert([lists[i].val, i])
        }
    }

    while(minHeap.size()) {
        const [val, i] = minHeap.extractRoot()
        current.next = lists[i]
        current = current.next

        if(lists[i].next) {
            lists[i] = lists[i].next
            minHeap.insert([lists[i].val, i])
        }
    }

    return dummy.next
}