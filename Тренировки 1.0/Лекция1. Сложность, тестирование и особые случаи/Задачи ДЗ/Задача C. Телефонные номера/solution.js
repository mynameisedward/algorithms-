// firstNumber = '+78047952807'
// secondNumber = '+78047952807'
// thirdNumber = '+76147514928'
// fourthNumber = '88047952807'

// let makePureString = (dirty_string) => {
//     pure_string = ''

//     for (symbol of dirty_string) {
//         if ((symbol != '-') && (symbol != '+') && (symbol != '(') && (symbol != ')')) {
//             pure_string = pure_string + symbol
//         }
//     }
//     if(pure_string.length != 11) {
//         pure_string = '8495' + pure_string
//     }
//     if(pure_string[0] == '7') {
//         // строку -> в массив, меняем символ и обратно массив -> в строку
//         let arr = [...pure_string]
//         arr[0] = '8'
//         pure_string = arr.join('')
//     }

//     // console.log(pure_string, pure_string[0])
//     return pure_string
// }


// let mainFunction = (firstNumber, secondNumber, thirdNumber, fourthNumber) => {

//     firstNumber = makePureString(firstNumber)
//     secondNumber = makePureString(secondNumber)
//     thirdNumber = makePureString(thirdNumber)
//     fourthNumber = makePureString(fourthNumber)


//     console.log(firstNumber === secondNumber ? 'YES ' : 'NO')
//     console.log(firstNumber === thirdNumber ? 'YES' : 'NO')
//     console.log(firstNumber === fourthNumber ? 'YES' : 'NO')
// }



// mainFunction(firstNumber, secondNumber, thirdNumber, fourthNumber)

const readline = require('readline');

// Создаем интерфейс для взаимодействия с терминалом
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Переменные для хранения введённых номеров
let firstNumber, secondNumber, thirdNumber, fourthNumber;

// Запрашиваем ввод первых трех номеров
rl.question('Введите первый номер телефона: ', (fn) => {
  firstNumber = fn;
  rl.question('Введите второй номер телефона: ', (sn) => {
    secondNumber = sn;
    rl.question('Введите третий номер телефона: ', (tn) => {
      thirdNumber = tn;
      
      // Четвертый номер запрашиваем отдельно, чтобы закончить цепочку
      rl.question('Введите четвертый номер телефона: ', (ftn) => {
        fourthNumber = ftn;
        
        // Далее идет ваша логика основной функции, которую не трогали
        let makePureString = (dirty_string) => {
          let pure_string = '';
          
          for (let symbol of dirty_string) {
              if (!['-', '+', '(', ')'].includes(symbol)) {
                  pure_string += symbol;
              }
          }
          if (pure_string.length !== 11) {
              pure_string = '8495' + pure_string;
          }
          if (pure_string.startsWith('7')) {
              pure_string = '8' + pure_string.slice(1); // Меняем первую цифру на '8'
          }
          return pure_string;
        };

        let mainFunction = (firstNumber, secondNumber, thirdNumber, fourthNumber) => {
          firstNumber = makePureString(firstNumber);
          secondNumber = makePureString(secondNumber);
          thirdNumber = makePureString(thirdNumber);
          fourthNumber = makePureString(fourthNumber);

          console.log(firstNumber === secondNumber ? 'YES' : 'NO');
          console.log(firstNumber === thirdNumber ? 'YES' : 'NO');
          console.log(firstNumber === fourthNumber ? 'YES' : 'NO');
        };

        mainFunction(firstNumber, secondNumber, thirdNumber, fourthNumber);
        rl.close(); // Закрываем интерфейс после обработки всех четырех номеров
      });
    });
  });
});