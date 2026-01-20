// Основная идея: 1) сортируем по дате начала
//                2) сравниваем с предыдущим, который лежит в массиве result

function merge(intervals) {
    intervals.sort((cur, next) => cur[0] - next[0])
    const result = [intervals[0]]

    for(let i = 1; i < intervals.length; i++) {
        const curr = intervals[i]
        const prev = result[result.length - 1]

        if(curr[0] <= prev[1]) {
            result.pop()
            result.push([prev[0], Math.max(prev[1], curr[1])])
        } else {
            result.push(curr)
        }
    }

    return result
}
