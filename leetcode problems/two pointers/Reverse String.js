function reverseString(str) {
    let arr = Array.from(str)

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]

        left++
        right--
    }

    return arr.join('')
}

console.log(reverseString('hello'))