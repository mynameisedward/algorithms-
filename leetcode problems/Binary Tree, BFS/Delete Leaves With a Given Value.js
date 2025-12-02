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
 * @param {number} target
 * @return {TreeNode}
 */
function leafTargetNode(node, target) {
    return !node.right && !node.left && node.val === target
}

var removeLeafNodes = function (root, target) {
    

    const stack = [[root, false]]

    while (stack.length > 0) {
        const [node, visited] = stack.pop()

        if(visited) {
            if(node.right && leafTargetNode(node.right, target)) {
                node.right = null
            }
            if(node.left && leafTargetNode(node.left, target)) {
                node.left = null
            }
        } else {
            stack.push([node, true])
            node.right && stack.push([node.right, false])
            node.left && stack.push([node.left, false])
        }
    }

    if(leafTargetNode(root, target)) {
        return null
    } 

    return root
};