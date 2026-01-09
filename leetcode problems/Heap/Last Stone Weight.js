// Основная идея: maxHeap и берем 2 максимальных камня и сталкиваем, пока камней не останется 1 
//                или не останется совсем
//

function lastStoneWeight(stones) {
    const maxHeap = new MaxHeap(null, stones)

    while(maxHeap.size() > 1) {
        const first = maxHeap.extractRoot()
        const second = maxHeap.extractRoot()

        const diff = Math.abs(first - second)
        
        diff !== 0 && maxHeap.insert(diff) 
    }


    return maxHeap.size() === 1 ? maxHeap.root() : 0
}




