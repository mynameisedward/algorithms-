// Основная идея: BFS, фиксируем максимальную сумму и возвращаем уровень с максимальной суммой

var maxLevelSum = function(root) {
    const queue = [root]
    const result = [0, -Infinity]

    let level_data = 0
    let level_count = 0
    while(queue.length > 0) {
        const level_size = queue.length
        level_data = 0
        for(let i = 0; i < level_size; i++) {
            const node = queue.shift()
            level_data += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        level_count++
        if(result[1] < level_data) {
            result[0] = level_count
            result[1] = level_data
        }
    }

    return result[0]
};