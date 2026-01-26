var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = "";

process.stdin.on('end', () => {
    console.log(result);
    process.exit(0);
});

rl.on('line', function(data) {
    result = smallestNumber(data);
});

function smallestNumber(num) {
    if(num === 0) {
        return '0'
    }
    
    const arr = Array.from(String(num), Number)
    
    if(num < 0) {
        arr.sort((a, b) => b - a)
    } else {
        arr.sort()
    }

    const idx = arr.findIndex(value => value !== 0)
    if(arr[0] === 0) {
        [arr[0], arr[idx]] = [arr[idx], arr[0]]
    }

    let result = arr.join('')

    if(result.includes('NaN')) {
        result = '-' + result.slice(3)
    }

    return result
}