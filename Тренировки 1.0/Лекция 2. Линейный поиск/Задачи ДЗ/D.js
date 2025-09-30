function algo(numbers) {
    let count = 0

    for(let i = 1; i <= numbers.length - 1; i++) {
        if((numbers[i] > numbers[i - 1]) && (numbers[i] > numbers[i + 1])) {
            count += 1
        }
    }

    console.log(count)
}

let test = [1, 1, 1, 1, 1]

algo(test)