function reverseString(s) {
    let result = s

    for(let i = 0, j = s.length - 1; i != j; ) {
        let iElem = s[i]
        let jElem = s[j]

        s[i] = jElem
        s[j] = iElem

        if((j - i) == 1) break

        i++
        j--

        console.log(i)
    }

    return result

}

let string = reverseString(['h', 'e', 'l', 'l', 'o'])

console.log(string)