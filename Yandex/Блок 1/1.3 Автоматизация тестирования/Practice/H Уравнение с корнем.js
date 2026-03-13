// не знаю зачем задача, пользы нет

// const [a, b, c] = inputs.map(Number);
const [a, b, c] = [0, 3, 4];

const x = (c * c - b) / a;

if (c < 0) {
  console.log("NO SOLUTION");
} else if ((a === 0)) {
  console.log("MANY SOLUTIONS");
} else {
  console.log(x);
}
