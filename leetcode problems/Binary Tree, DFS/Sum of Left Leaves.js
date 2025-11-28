function sumOfLeftLeaves(root) {
    const stack = [[root, 'r']]
    let sum = 0

    while(stack.length > 0) {
        const [node, leftOrRight] = stack.pop()
        if(!node.left && !node.right && leftOrRight === 'l') {
            sum += node.val
        }

        stack.push([node.left, 'l'])
        stack.push([node.right, 'r'])
    }

    return sum
}
