/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(tree) {
    if(!tree) {
        return 0
    }
    const stack = [[tree, 1]]
    let maxDepth = 0

    while(stack.length > 0) {
        const [node, depth] = stack.pop()
        maxDepth = Math.max(maxDepth, depth)
        node.left && stack.push([node.left, depth + 1])
        node.right && stack.push([node.right, depth + 1])
    }

    return maxDepth
}
var diameterOfBinaryTree = function(root) {
    const stack = [root]
    let max = 0
    
    while(stack.length > 0) {
        const node = stack.pop()
        const leftDepth = node.left ? maxDepth(node.left) : 0
        const rightDepth = node.right ? maxDepth(node.right) : 0
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
        max = Math.max(max, (leftDepth + rightDepth))
    }

    return max
};