// Основная идея: бинарный поиск, ищем от 1 до Max(piles)
//                                проверяем хватит ли часов

function minEatingSpeed(piles, h) {
    let low = 1
    let high = Math.max(...piles)

    let result = high

    while(low <= high) {
        let mid = Math.floor((high + low) / 2)
        let hoursNeeded = 0

        for(const pile of piles) {
            hoursNeeded = Math.ceil(pile / mid)
        }

        if(hoursNeeded <= h) {
            result = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }


    return result
}