// Основная идея: закидываем в кучу проекты, на которые у нас есть капитал, 
//                и k раз вытаскиваем наиболее профитный проект из maxHeap

function findMaximizedCapital(k, w, profits, capital) {
    const pairs = profits.map((_, index) => [capital[index], profits[index]])
    pairs.sort((first, second) => first[0] - second[0])

    const maxHeap = new MaxHeap()
    let checked = 0

    for(let i = 0; i < k; i++) {
        while((checked < pairs.length) && (pairs[checked][0] <= w)) {
            maxHeap.insert(pairs[checked][1])
            checked += 1
        }
        
        if(maxHeap.size() === 0) {
            break
        }

        w += maxHeap.extractRoot()
    }

    return w
}