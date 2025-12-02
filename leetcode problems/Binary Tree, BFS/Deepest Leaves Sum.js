function deepestLeavesSum(root) {
    const queue = [root]
    let sum = 0

    while(queue.length > 0) {
        const level_size = queue.length
        let isLast = true
        const level_data = []
        for(let i = 0; i < level_size; i++) {
            const node = queue.shift()
            if(node.left || node.right) {
                isLast = false
                node.left && queue.push(node.left)
                node.right && queue.push(node.right)
            } else {
                level_data.push(node.val)
            }
        }
        if(isLast) {
            for(let i = 0; i < level_data.length; i++) {
                sum += level_data[i]
            }
        }

    }

    return sum
}