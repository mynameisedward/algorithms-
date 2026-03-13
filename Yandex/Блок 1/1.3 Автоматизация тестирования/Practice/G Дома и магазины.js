// Основная идея: 
//                1) для каждой единицы запускаем функцию nearest, которая вычисляет ближайший магазин
//                2) Берем максимум

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

function nearest_shop(avenue, house_idx) {
  let leftShop
  let rightShop

  let leftCount = 0
  for(let i = house_idx - 1; i >= 0; i--) {
    leftCount += 1
    if(avenue[i] === 2) {
      leftShop = leftCount
      break
    }
  }

  let rightCount = 0
  for(let i = house_idx + 1; i <= avenue.length - 1; i++) {
    rightCount += 1
    if(avenue[i] === 2) {
      rightShop = rightCount
      break
    }
  }

  
  if(!leftShop) {
    return rightShop
  } else if(!rightShop) {
    return leftShop
  } else {
    return Math.min(leftShop, rightShop)
  }
}

rl.on('line', (line) => {
  inputs.push(line)
  const input = inputs[0].split(' ').map(Number)

  let result
  for(let i = 0; i < input.length; i++) {
    if(input[i] === 1) {
      const nearest = nearest_shop(input, i)
      if(!result) {
        result = nearest
      } else {
        result = Math.max(result, nearest)
      }
    }
  }

  console.log(result)

  rl.close();
});