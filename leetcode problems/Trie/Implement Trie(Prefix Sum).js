class Node {
    constructor() {
        this.children = new Map()
        this.terminal = false
    }
}

function Trie() {
    this.root = new Node()
}


Trie.prototype.insert = function(word) {
    let node = this.root

    for(let i = 0; i < word.length; i++) {
        if(!(node.children.has(word[i]))) {
            node.children.set(word[i], new Node())
        } 
        node = node.children.get(word[i])
    }

    node.terminal = true
}

Trie.prototype.search = function(word) {
    let node = this.root

    for(let i = 0; i < word.length; i++) {
        if(node.children.has(word[i])) {
            node = node.children.get(word[i])
        } else {
            return false
        }
    }

    return node.terminal
}

Trie.prototype.startsWith = function(prefix) {
    let node = this.root

    for(let i = 0; i < prefix.length; i++) {
        if(node.children.has(prefix[i])) {
            node = node.children.get(prefix[i])
        } else {
            return false
        }
    }

    return true
}