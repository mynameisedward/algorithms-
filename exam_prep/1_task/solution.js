function algo(A, B, C, D) {
    if(D <= B) {
        return A
    } else if(D > B) {
        return A + ((D - B) * C)
    }
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.once('line', (line) => {
    const numbers = line.trim().split(' ').map(Number)

    if(numbers.length !== 4) {
        console.error('Нужно только 4 числа')
        process.exit(1)
    }

    const [A, B, C, D] = numbers
    const result = algo(A, B, C, D)

    console.log(result)

    process.exit(0)
})