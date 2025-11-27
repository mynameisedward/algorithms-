// Using stack
function searchBST(root, val) {
    const stack = [root]

    while(stack.length > 0) {
        const node = stack.pop()
        if(!node) {
            continue
        }
        if(node.val === val) {
            return node
        } else if(val < node.val) {
            stack.push(node.left)
        } else if(val > node.val) {
            stack.push(node.right)
        }
    }

    return null
}



// Using recursion
function searchBST(root, val) {
    if(!root) {
        return null
    }
    if(root.val === val) {
        return root
    }

    if(val < root.val) {
        return searchBST(root.left)
    } else {
        return searchBST(root.right)
    }
}

// repeat