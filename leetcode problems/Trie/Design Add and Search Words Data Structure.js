class Node {
    constructor() {
        this.children = new Map()
        this.terminal = false
    }
}


var WordDictionary = function() {
    this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root

    for(let i = 0; i < word.length; i++) {
        if(!(node.children.has(word[i]))) {
            node.children.set(word[i], new Node())
        }
        node = node.children.get(word[i])
    }

    node.terminal = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const stack = [[0, this.root]]

    while(stack.length > 0) {
        const [index, node] = stack.pop()

        if(index === word.length) {
            if(node.terminal){
                return true
            } else {
                continue
            }
        }

        const char = word[index]

        if(char === '.') {
            for(const nextNode of node.children.values()) {
                stack.push([index + 1, nextNode])
            }
        } else {
            if(node.children.has(char)) {
                stack.push([index + 1, node.children.get(char)])
            }
        }
    }

    return false
};