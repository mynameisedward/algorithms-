// Чтение входных данных
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// Парсим входные данные
const [tRoomStr, tCondStr] = inputData[0].split(' ');
const tRoom = parseInt(tRoomStr, 10);
const tCond = parseInt(tCondStr, 10);
const mode = inputData[1]; // режим работы

// Логика работы кондиционера
if (mode === 'freeze') {
    // Охлаждаем комнату, если теплее желаемого
    console.log(Math.min(tRoom, tCond));
} else if (mode === 'heat') {
    // Нагреваем комнату, если холоднее желаемого
    console.log(Math.max(tRoom, tCond));
} else if (mode === 'auto') {
    // Автоматически достигаем точной температуры
    console.log(tCond);
} else if (mode === 'fan') {
    // Только вентилируем воздух, температура остается прежней
    console.log(tRoom);
}