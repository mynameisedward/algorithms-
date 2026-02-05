function uniqueOccurrences(arr) {
    const myMap = new Map()

    for(let elem of arr) {
        if(myMap.has(elem)) {
            myMap.set(elem, myMap.get(elem) + 1)
        } else {
            myMap.set(elem, 1)
        }
    }

    const mySet = new Set()

    for(const [key, value] of myMap) {
        if(mySet.has(value)) {
            return false
        } else {
            mySet.add(value)
        }
    }

    return true
}