function makePureString(str) {
    const arr = str.split('')

    let startCount = 0
    let endCount = 0

    while(arr[0] === `'`) {
        startCount += 1
        arr.shift()
    }

    while(arr[arr.length - 1] === `'`) {
        endCount += 1
        arr.pop()
    }

    
    for(let i = 0; i < startCount; i++) {
        arr.shift()
    }
    for(let i = 0; i < endCount; i++) {
        arr.pop()
    }

    return arr.join('')
}
