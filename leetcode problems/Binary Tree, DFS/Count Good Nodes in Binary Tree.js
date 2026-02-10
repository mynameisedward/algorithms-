function goodNodes(root) {
    let count = 0

    const stack = [[root, root.val]]

    while(stack.length > 0) {
        const [node, max] = stack.pop()

        if(node.val >= max) {
            count++
        }

        node.left && stack.push([node.left, Math.max(node.left.val, max)])
        node.right && stack.push([node.right.val, Math.max(node.right.val, max)])
    }


    return count
}