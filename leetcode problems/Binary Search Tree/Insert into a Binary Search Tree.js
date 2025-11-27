function intsertIntoBST(root, val) {
    if(!root) {
        return new TreeNode(val)
    } 

    const stack = [root]

    while(stack.length > 0) {
        const node = stack.pop()

        if(val < node.val) {
            if(node.left) {
                stack.push(node.left)
            } else {
                const newNode = new TreeNode(val)
                node.left = newNode
                break
            }
        } else {
            if(node.right) {
                stack.push(node.right)
            } else {
                const newNode = new TreeNode(val)
                node.right = newNode
                break
            }
        }
    }

    return root
}

// repeat