function minDepth(root) {
    if(!root) {
        return 0
    }

    const stack = [[root, 1]]
    let minDepth = +Infinity

    while(stack.length > 0) {
        const [node, depth] = stack.pop()

        if(!node.left && !node.right) {
            minDepth = Math.min(depth, minDepth)
            continue
        }
        node.left && stack.push([node.left, depth + 1])
        node.right && stack.push([node.right, depth + 1])
    }

    return minDepth
}