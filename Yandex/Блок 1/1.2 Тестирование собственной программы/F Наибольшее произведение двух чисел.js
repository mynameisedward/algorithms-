// Основная идея: отсортировать по возрастанию, 
//                взять произведение двух правых модулей и взять произведение двух левых модулей
//                сравнить произведения

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', (line) => {
  inputs.push(line)
  const input = inputs[0].split(' ').map(Number)

  input.sort((a, b) => a - b)

  const left = [input[0], input[1]]
  const right = [input[input.length - 2], input[input.length - 1]]

  const leftMult = Math.abs(left[0]) * Math.abs(left[1])
  const rightMult = Math.abs(right[0]) * Math.abs(right[1])

  if(leftMult > rightMult) {
    console.log(left[0], left[1])
  } else {
    console.log(right[0], right[1])
  }

  rl.close();
});