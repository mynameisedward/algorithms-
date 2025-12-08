function romanToInt(s) {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let result = 0

    for(let i = 0; i < s.length; i++) {
        const current = romans[s[i]]
        const next = romans[s[i + 1]]

        if(current < next) {
            result += next - current
            i++
        } else {
            result += current
        }
    }

    return result
}

console.log(romanToInt('MCMXCIV'))