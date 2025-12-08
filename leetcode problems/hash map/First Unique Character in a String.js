function firstUniqChar(s) {
    const myMap = new Map()
    
    for(let elem of s) {
        if(myMap.has(elem)) {
            myMap.set(elem, myMap.get(elem) + 1)
        } else {
            myMap.set(elem, 1)
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(myMap.get(s[i]) === 1) {
            return i
        }
    }

    return -1
}