// через стек, итеративно
function invertTree(root) {
    const stack = [root]
    
    while(stack.length > 0) {
        let node = stack.pop()
        if(!node) {
            continue
        }
        [node.right, node.left] = [node.left, node.right]
        stack.push(node.left)
        stack.push(node.right)
    }

    return root
}


// Через рекурсию
function invertTree(root) {
    if(!root) {
        return root
    }
    
    [root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)

    return root
}