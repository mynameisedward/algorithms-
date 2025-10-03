const readline = require('readline');

function algo(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }

        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }

    let maxMultiply = max1 * max2;
    let minMultiply = min1 * min2;

    if (maxMultiply >= minMultiply) {
        console.log(`${max2} ${max1}`);
    } else {
        console.log(`${min1} ${min2}`);
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