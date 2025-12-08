function isSymmetric(root) {
    const stack = [root.left, root.right]

    while(stack.length > 0) {
        const right = stack.pop()
        const left = stack.pop()
        if(right && left) {
            if(right.val === left.val) {
                stack.push(right.right)
                stack.push(left.left)
                stack.push(right.left)
                stack.push(left.right)
            } else {
                return false
            }
        } else if(!right && !left) {
            continue
        } else {
            return false
        }
    }


    return true
}

// repeatt