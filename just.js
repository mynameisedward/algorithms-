function smallestNumber(num) {
    if (num === 0) return 0;

    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num *= -1; // Приводим число к положительному виду
    }

    const digits = String(num).split("");

    if (isNegative) {
        // Отрицательные числа сортируются по убыванию для максимального отрицательного значения
        digits.sort((a, b) => b.localeCompare(a));
    } else {
        // Положительные числа сортируются по возрастанию, кроме случаев с ведущими нулями
        digits.sort();
        
        // Перемещаем первую ненулевую цифру вперёд, если есть ведущие нули
        if (digits[0] === '0') {
            for (let i = 1; i < digits.length; i++) {
                if (digits[i] !== '0') {
                    [digits[0], digits[i]] = [digits[i], digits[0]];
                    break;
                }
            }
        }
    }

    let res = parseInt(digits.join(''));

    return isNegative ? -res : res;
} 

// Тестовые случаи
console.log(smallestNumber(310));      // Output: 103
console.log(smallestNumber(-7605));   // Output: -7650
console.log(smallestNumber(10));       // Output: 10
console.log(smallestNumber(-8463));   // Output: -8643

console.log(smallestNumber('682902'))
console.log(smallestNumber('01'))
console.log(smallestNumber('-10'))



