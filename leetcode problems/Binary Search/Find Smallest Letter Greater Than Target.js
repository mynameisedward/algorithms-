function nextGreatestLetter(letters, target) {
    let low = 0
    let high = letters.length - 1
    let result = ''

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        const guess = letters[mid]

        if(guess > target) {
            result = guess
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return result || letters[0]
}