function splitWordsBySeparator(words, separator) {
    const result = []

    for(let word of words) {
        const arr = word.split(separator)
        for(let elem of arr) {
            if(elem !== '') {
                result.push(elem)
            }
        }
    }

    return result
}

console.log(splitWordsBySeparator(['frog*yo', 'John*Smith', 'Peter*Parker'], '*'))
console.log(splitWordsBySeparator([], ''))
console.log(splitWordsBySeparator(['abc'], ''))
console.log(splitWordsBySeparator(['abc', ''], ''))
console.log(splitWordsBySeparator(['.b.c', 'df.g.k'], '.'))