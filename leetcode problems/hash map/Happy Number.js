function happyNumber(n) {
    if (Number(String(n)[1]) == NaN) {
        return false
    }

    let mySet = new Set()

    let number = n
    while (!(number == 1)) {
        let sum = 0

        for (let i = 0; i < String(number).length; i++) {
            sum += (Number(String(number)[i]) ** 2)
        }
        if (mySet.has(sum)) {
            return false
        }
        mySet.add(sum)

        number = sum
    }
    return true
}