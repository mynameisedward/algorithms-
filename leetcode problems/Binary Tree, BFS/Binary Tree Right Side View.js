function rightSideView(root) {
    if(!root) {
        return []
    }

    const queue = [root]
    const result = []

    while(queue.length > 0) {
        const level_size = queue.length
        for(let i = 0; i < level_size; i++) {
            const node = queue.shift()
            if(i === (level_size - 1)) {
                result.push(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return result
}

// repeat