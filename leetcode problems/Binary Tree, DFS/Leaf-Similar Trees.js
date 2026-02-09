// Основная идея: DFS, ложим в массивы листья двух деревьев и сравниваем массивы

function leafs(root) {
    const result = []
    const stack = [root]

    while(stack.length > 0) {
        const node = stack.pop()

        node.right && stack.push(node.right)
        node.left && stack.push(node.left)

        if(!node.left && !node.right) {
            result.push(node.val)
        }
    }

    return result
}


function leafSimilar(root1, root2) {
    const leafs_1 = leafs(root1)
    const leafs_2 = leafs(root2)

    if(leafs_1.length !== leafs_2.length) {
        return false
    }

    for(let i = 0; i < leafs_1.length; i++) {
        if(leafs_1[i] !== leafs_2[i]) {
            return false
        }
    }

    return true
}