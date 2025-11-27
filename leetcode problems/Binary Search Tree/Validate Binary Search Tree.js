function isValidBST(root) {
    const stack = [[root, -Infinity, +Infinity]] 

    while(stack.length > 0) {
        const [node, min_range, max_range] = stack.pop()
        
        if(node) {
            if((node.val > min_range) && (node.val < max_range)) {
                stack.push([node.left, min_range, node.val])
                stack.push([node.right, node.val, max_range])
            } else {
                return false
            }
        }
    }

    return true
}