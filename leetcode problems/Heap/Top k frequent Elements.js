const nums = [1,1,1,2,2,3]

const counter = new Map()
for (let num of nums) {
    if (!counter.get(num)) {
        counter.set(num, 1)
    } else {
        counter.set(num, counter.get(num) + 1)
    }
}


for(const [key, value] of counter.entries()) {
    console.log(key, ':', value)
}
