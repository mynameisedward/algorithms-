// Iterative, using Stack

function isSameTree(p, q) {
    const stack = [p, q]

    while(stack.length > 0) {
        const node1 = stack.pop()
        const node2 = stack.pop()
        if(node1 && node2) {
            if(node1.val === node2.val) {
                stack.push(node1.left, node2.left, node1.right, node2.right)
            } else {
                return false
            }
        } else if(!node1 && !node2) {
            continue
        } else {
            return false
        }
    }
    

    return true
}


// Using Recursion

function isSameTree(p, q) {
    if(!p && !q) {
        return true
    } 

    if(!p || !q) {
        return false
    }

    if(p1.val != p2.val) {
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// repeat