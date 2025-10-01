function isSymmetri(arr) {
    let arr1 = [...arr];
    let str = arr.join('');
    let reverse_str = arr1.reverse().join('');

    if (str === reverse_str) {
        return false;
    } else if (str !== reverse_str) {
        return true;
    }
}

function algo(len_arr, arr) {
    if (isSymmetri(arr) == false) {
        console.log(0);
        return;
    }

    let newArr = [...arr];
    let secondArr = [];

    for (let i = 0; isSymmetri(newArr); i++) {
        secondArr.unshift(arr[i]);
        newArr = [...arr, ...secondArr];
    }

    console.log(secondArr.length);
    console.log(secondArr.join(' '));
}




// Чтение входных данных
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const N = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    algo(N, arr);
});