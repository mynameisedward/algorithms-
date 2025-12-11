class Node {
    constructor() {
        this.words = [];
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
}

Trie.prototype.insert = function (word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
        if (!(node.children.has(word[i]))) {
            node.children.set(word[i], new Node())
        }
        node = node.children.get(word[i])
        node.words.push(word)
    }
}

Trie.prototype.search = function (word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!(node.children.has(word[i]))) {
            return false
        }
        node = node.children.get(word[i])
    }
    return node.words
}

var suggestedProducts = function (products, searchWord) {
    const root = new Trie()
    
    for(let word of products) {
        root.insert(word)
    }

    const result = []
    let prefix = ''
    for(let i = 0; i < searchWord.length; i++) {
        prefix = prefix + searchWord[i]
        const found = root.search(prefix)
        if(found.length > 0) {
            found.sort()
            while(found.length > 3) {
                found.pop()
            }
            result.push(found)
        } else {
            result.push([])
        }
    }

    return result
};


// products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
//     searchWord = "mouse"



// m = ['mobile', "moneypot", 'monitor']
// mo = ["mobile", "moneypot", "monitor"]
// mou = ["mouse", "mousepad"]
// mous = ["mouse", "mousepad"]
// mouse = ["mouse", "mousepad"]