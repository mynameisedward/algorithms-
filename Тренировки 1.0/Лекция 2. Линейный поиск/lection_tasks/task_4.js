let arr = [1, 2]

function algo(arr) {
    max = Math.max(arr[0], arr[1])
    max2 = Math.min(arr[0], arr[1])

    if(arr.length > 2) {
        for(let elem of arr) {
            if(elem > max) {
                max2 = max
                max = elem
            } else if(elem > max2) {
                max2 = elem
            }
        }
    }

    console.log(`max-1: ${max}, max-2: ${max2}`)
}

algo(arr)


