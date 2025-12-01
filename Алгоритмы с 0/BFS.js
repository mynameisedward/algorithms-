function bfs(root) {
    const queue = [root]   // queue - очередь
    while(queue.length > 0) {
        const level_size = queue.length
        for(let i = 0; i < level_size; i++) {
            let node = queue.popLeft()  // достаем ноду с начала очереди
            node.left && queue.push(node.left)       // ложим в конец очереди левую ноду
            node.right && queue.push(node.right)      // ложим в конец очереди правую ноду
        }
    }

    return
}