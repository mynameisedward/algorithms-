const nums = [1, 1, 1, 1, 2, 2, 2, 3]

const myMap = new Map()
for (let num of nums) {
    if (myMap.has(num)) {
        myMap.set(num, myMap.get(num) + 1)
    } else {
        myMap.set(num, 1)
    }
}

console.log(myMap)