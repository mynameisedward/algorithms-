function numJewelsInStones(jewels, stones) {
    const arrJewels = jewels.split('')
    let count = 0

    for(let i = 0; i < jewels.length; i++) {
        if(arrJewels.has(stones[i])) {
            count += 1
        }
    }

    return count
}