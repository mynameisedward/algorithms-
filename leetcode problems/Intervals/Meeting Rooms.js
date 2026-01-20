// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: false // Митинги пересекаются

// Основная идея: 1) отсортировать встречи по дате начала
//                2) проверить, что время начала следующего митинга больше или равна концу предыдущего, иначе false

function canAttendMeetings(intervals) {
    const sortedMeetings = intervals.sort((first, second) => first[0] - second[0])

    for(let i = 0; i < sortedMeetings.length - 1; i++) {
        const current = sortedMeetings[i]
        const next = sortedMeetings[i + 1]

        if(next[0] < current[1]) {
            return false
        }
    }

    return true
}


console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]]))
console.log(canAttendMeetings([[7, 10], [2, 4]]))
