function intervalIntersection(firstList, secondList) {
    const result = []
    let first = 0
    let second = 0

    while(first < firstList.length && second < secondList.length) {
        const interval1 = firstList[first]
        const interval2 = secondList[second]

        const start = Math.max(interval1[0], interval2[0])
        const end = Math.min(interval1[1], interval2[1])

        if(start <= end) {

            result.push([start, end])
        }

        if(interval1[1] < interval2[1]) {
            first += 1
        } else {
            second += 1
        }
    }

    return result
}