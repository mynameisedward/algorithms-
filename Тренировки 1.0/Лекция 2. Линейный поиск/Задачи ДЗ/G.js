function algo(arr) {
    let max1 = arr[0]
    let max2 = arr[1]

    let min1 = arr[0]
    let min2 = arr[1]

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] >= max1) {
            max2 = max1
            max1 = arr[i]
        } else if((arr[i] >= max2) && (arr[i] < max1)) {
            max2 = arr[i]
        } else if(arr[i] < max2) continue
    }

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] < min1) {
            min2 = min1 
            min1 = arr[i]
        } else if((arr[i] < min2) && (arr[i] > min1)) {
            min2 = arr[i]
        } else if(arr[i] > min2) {
            continue
        }
    }

    let max = [max1, max2]
    let min = [min1, min2]

    let maxMultiply = max[0] * max[1]
    let minMultiply = min[0] * min[1]

    if(maxMultiply == minMultiply) {
        console.log(max.join(' '))
    } else if(maxMultiply > minMultiply) {
        console.log(max.join(' '))
    } else if(minMultiply > maxMultiply) {
        console.log(min.join(' '))
    }

    console.log(max, min)
}

let test = [1, -1]

algo(test)


