var isBalanced = function (root) {
    if(!root) {
        return true
    }

    var maxDepth = function (root) {
        if (!root) {
            return 0
        }

        let leftSubtree = maxDepth(root.left)
        let rightSubtree = maxDepth(root.right)

        return 1 + Math.max(leftSubtree, rightSubtree)
    };
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    if(Math.abs(left - right) > 1) {
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
};