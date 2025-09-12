// 1. +7<код><номер>
// 2. 8<код><номер>
// 3. <номер>
// <номер> - 7 цифр, <код> - 3 цифры

// для начала очистить строку от символов по типу  ")( - +"

string = '+7-4-9-5-43-023-97'


let makePureString = (dirty_string) => {
    pure_string = ''

    for (symbol of dirty_string) {
        if ((symbol != '-') && (symbol != '+') && (symbol != '(') && (symbol != ')')) {
            pure_string = pure_string + symbol
        }
    }
    if(pure_string.length != 11) {
        pure_string = '8495' + pure_string
    }
    if(pure_string[0] == '7') {
        // строку -> в массив, меняем символ и обратно массив -> в строку
        let arr = [...pure_string]
        arr[0] = '8'
        pure_string = arr.join('')
    }

    console.log(pure_string, pure_string[0])
}


makePureString('8(495)430-23-97')
makePureString('+7-4-9-5-43-023-97')
makePureString('4-3-0-2-3-9-7')   