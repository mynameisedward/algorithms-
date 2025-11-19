function maxDepth(root) {
    if(!root) {
        return 0
    }

    let maxDepth = 0
    let stack = [[root, 1]]

    while(stack.length > 0) {
        let [node, depth] = stack.pop()
        if(node) {
            maxDepth = Math.max(depth, maxDepth)
            stack.push([node.right, depth + 1])
            stack.push([node.left, depth + 1])
        }
    }


    return maxDepth
}


// using recursion
var maxDepth = function(root) {
    if(!root) {
        return 0
    }

    let leftSubtree = maxDepth(root.left)
    let rightSubtree = maxDepth(root.right)

    return 1 + Math.max(leftSubtree, rightSubtree)
};