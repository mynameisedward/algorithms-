// Основная идея: поставить newInterval в начало и двигать вперед по необходимости и мержить в процессе. O(n)
//  или можно поставить его в конец, отсортировать еще раз и смержить одним проходом. O(n * logn)

var insert = function(intervals, newInterval) {
    const result = [newInterval]

    for(let i = 0; i < intervals.length; i++) {
        const prev = result[result.length - 1]
        result.push(intervals[i])
        const last = result.length - 1
        if(intervals[i][1] < prev[0]) {
            [result[last], result[last - 1]] = [result[last - 1], result[last]]
        } else if(intervals[i][0] < prev[0]) {
            result.pop()
            result[result.length - 1][0] = Math.min(intervals[i][0], prev[0])
            result[result.length - 1][1] = Math.max(intervals[i][1], prev[1])
        } else if(intervals[i][0] <= prev[1]) {
            result.pop()
            result[result.length - 1][1] = Math.max(intervals[i][1], prev[1])
        }
    }
    

    return result
};
