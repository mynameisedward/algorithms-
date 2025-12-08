function hasPathSum(root, targetSum) {
    if (!root) {
        return false
    }
    const stack = [[root, targetSum - root.val]]

    while (stack.length > 0) {
        const [node, sum] = stack.pop()
        if ((!node.left) && (!node.right) && (sum === 0)) {
            return true
        } else {
            node.left && stack.push([node.left, sum - node.left.val])
            node.right && stack.push([node.right, sum - node.right.val])
        }
    }

    return false
}

// repeatt