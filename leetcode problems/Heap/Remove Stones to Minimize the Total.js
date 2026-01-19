// Основная идея: выбираем макс. элемент из MaxHeap и делим его на 2. Делаем это k раз
//                  Потом возвращаем сумму

function minStoneSum(piles, k) {
    let sum = 0
    for(let num of piles) {
        sum += num
    }

    const maxHeap = new MaxHeap(null, piles)

    for(let i = 0; i < k; i++) {
        const root = maxHeap.extractRoot()
        maxHeap.insert(Math.ceil(root / 2))
        sum -= root - Math.ceil(root / 2)
    }

    return sum
}