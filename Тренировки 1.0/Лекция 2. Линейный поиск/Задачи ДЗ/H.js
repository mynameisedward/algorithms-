const readline = require('readline');

function find2Min(arr) {
    // 2 минимальных числа
    let min1 = Infinity
    let min2 = Infinity

    // Нахождение 2х минимальных чисел
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= min1) {
            min2 = min1
            min1 = arr[i]
        } else if(arr[i] < min2 && (arr[i] > min1)) {
            min2 = arr[i]
        }
    }

    return [min1, min2]
}

function find3Max(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= max1) {
            max3 = max2
            max2 = max1
            max1 = arr[i]
        } else if((arr[i] >= max2) && (arr[i] < max1)) {
            max3 = max2
            max2 = arr[i]
        } else if((arr[i] >= max3) && (arr[i] < max2)) {
            max3 = arr[i]
        }
    }

    return [max1, max2, max3]
}

function algo(arr) {
    
    if(arr.length == 0) {
        return
    } 
    if(arr.length == 3) {
        console.log(arr[0], arr[1], arr[2])
        return
    }

    let [min1, min2] = find2Min(arr) // 2 минимальных числа
    let [max1, max2, max3] = find3Max(arr) // 3 максимальных числа

    let firstMultiply = min1 * min2 * max1
    let secondMultiply = max1 * max2 * max3

    if(firstMultiply >= secondMultiply) {
        console.log(min1, min2, max1)
    } else if(secondMultiply >= firstMultiply) {
        console.log(max1, max2, max3)
    }
}

// Создаем интерфейс для чтения ввода с терминала
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function(line) {
    input += line + '\n';
});

rl.on('close', function() {
    const lines = input.trim().split('\n');
    for (let i = 0; i < lines.length; i++) {
        const numbers = lines[i].split(' ').map(Number);
        algo(numbers);
    }
});