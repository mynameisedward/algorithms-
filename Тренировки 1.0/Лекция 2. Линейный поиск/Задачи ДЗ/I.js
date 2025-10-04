

// const fs = require('fs');

// // Считываем данные из стандартного потока ввода
// const input = fs.readFileSync('/dev/stdin', 'utf8');

// // Удаляем пробелы и переносим строки в массив
// let lines = input.trim().split('\n');

// // Первую строку обрабатываем отдельно
// let firstLine = lines.shift();
// let [N, M, K] = firstLine.split(' ').map(Number);

// // Создаем массив для хранения координат мин
// let mines = [];

// // Читаем оставшиеся K строк с координатами мин
// for(let i = 0; i < K; i++) {
//     let line = lines[i];
//     let [p, q] = line.split(' ').map(Number);
//     mines.push([p, q]);
// }

// console.log("Размеры поля:", N, "×", M);
// console.log("Количество мин:", K);
// console.log("Координаты мин:");
// mines.forEach((mine) => console.log(`(${mine[0]}, ${mine[1]})`));


let matrix = []
let rows = 3
let columns = 3
let mins = [[1, 1], [2, 1]]

for(let i = 0; i < rows; i++) {
    matrix[i] = []
    for(let j = 0; j < columns; j++) {
        matrix[i][j] = 0
    }
}

// for(elem of mins) console.log(elem)


console.log(matrix)

