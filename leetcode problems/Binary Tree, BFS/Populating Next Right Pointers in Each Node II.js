// Основная идея: BFS, последний элемент указывает на null, не последний на queue[0]

function connect(root) {
    if(!root) {
        return null
    }

    const queue = [root]

    while(queue.length > 0) {
        const level_size = queue.length
        for(let i = 0; i < level_size; i++) {
            const node = queue.shift()
            if(i < (level_size - 1)) {
                node.next = queue[0]
            } else {
                node.next = null
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }  
    }

    return root
}

// repeatt