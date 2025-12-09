function rangeSumBST(root, low, high) {
    const stack = [root]
    let sum = 0

    while(stack.length > 0) {
        const node = stack.pop()
        
        if(node.val >= low && node.val <= high) {
            sum += node.val
        }

        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
    }

    return sum
}