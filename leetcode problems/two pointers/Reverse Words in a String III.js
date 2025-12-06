/**
 * @param {string} s
 * @return {string}
 */

function reverseWord(str) {
    const arr = str.split('')

    let left = 0
    let right = str.length - 1

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left += 1
        right -= 1
    }

    return arr.join('')
}

var reverseWords = function(s) {
    const split = s.split(' ')

    for(let i in split) {
        let word = split[i]
        split[i] = reverseWord(word)
    }

    return split.join(' ')
};