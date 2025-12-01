function largestValues(root) {
    if(!root) {
        return []
    }

    const queue = [root]
    const result = []

    while(queue.length > 0) {
        const level_size = queue.length
        let max = -Infinity
        for(let i = 0; i < level_size; i++) {
            const node = queue.shift()
            max = Math.max(max, node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(max)
    }

    return result
}