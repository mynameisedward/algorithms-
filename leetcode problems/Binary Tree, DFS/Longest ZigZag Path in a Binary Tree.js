// Основная идея: DFS, в стеке храним [нода, откуда, уровень]

var longestZigZag = function(root) {
    let count = 0

    const stack = []
    root.left && stack.push([root.left, 'left', 1])
    root.right && stack.push([root.right, 'right', 1])

    while(stack.length > 0) {
        const [node, from, level] = stack.pop()

        if(node.left) {
            const leftNode = [node.left, 'left']
            if(from === 'right') {
                leftNode[2] = level + 1
            } else {
                leftNode[2] = 1
            }
            stack.push(leftNode)
        }
        if(node.right) {
            const rightNode = [node.right, 'right'] 
            if(from === 'left') {
                rightNode[2] = level + 1
            } else {
                rightNode[2] = 1
            }
            stack.push(rightNode)
        }


        count = Math.max(count, level)
    }

    return count
};