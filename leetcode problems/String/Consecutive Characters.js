function maxPower(s) {
    let result = 1
    let currentSum = 1


    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            currentSum += 1
        } else {
            result = Math.max(result, currentSum)
        }
    }

    result = Math.max(result, currentSum)


    return result 
}