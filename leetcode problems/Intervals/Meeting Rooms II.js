// Основная идея: используем minHeap чтобы хранить время той встречи, которая закончится раньше всех
//                т.е в minHeap храним времена окончания встречи
//                    идем по каждой встрече и проверяем когда оканчивается ближайшая.
//                            если не устравает, то берем новую комнату
//               в конце в куче будет столько элементов, сколько комнат требуется                


function minMeetingRooms(intervals) {
    intervals.sort((first, second) => first - second)
    const minHeap = new MinHeap()

    minHeap.insert(intervals[0][1])

    for(let i = 1; i < intervals.length; i++) {
        const last = minHeap.root()
        if(intervals[i][0] <= last) {
            minHeap.insert(intervals[i][1])
        } else {
            minHeap.extractRoot()
            minHeap.insert(intervals[i][1])
        }
        
    }

    return minHeap.size()
} 



