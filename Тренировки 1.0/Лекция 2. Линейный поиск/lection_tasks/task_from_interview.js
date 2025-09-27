// // Дана строка(возможно пустая), состоящая из букв A-Z:
// //                               AAAABBBBCCCXYZDDDDEEEEFFFAAAAAABBBBBBBBBB

// // нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F2
// //  И сгенерирует ошибку, если на вход пришла невалидная строка

// // Пояснения: Если символ встречается один раз, он остается без изменений
// // Если символ повторяется более 1 раза, к нему добавляется кол-во повторений


let string = 'AAAAABBBCCCCDDDEEFFGHIJФФФ'


function algo(string) {

    function pack(string, count) {
        if(count > 1) {
            return string + String(count)
        } else if(count == 1) {
            return string
        }
    }

    let output_arr = []
    let lastSymbol = string[0]
    let lastCount = 0


    for(let i in string) {
        if(string[i] != lastSymbol) {

            output_arr.push(pack(lastSymbol, i - lastCount))
            lastSymbol = string[i]
            lastCount = i
        }
    }

    output_arr.push(pack(lastSymbol, string.length - lastCount))

    let output_string = output_arr.join('')
    console.log(output_string)
}

algo(string)