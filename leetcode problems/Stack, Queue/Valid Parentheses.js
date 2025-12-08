// Основная идея: ложим в стек открывающие скобки, а если попалась закрывающая, 
//                                                  то проверяем, соответсвует ли она паре

function isValid(s) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack = []

    for(let char of s) {
        if(pairs[char]) {
            stack.push(char)
        } else {
            let stackElem = stack.pop()
            if(pairs[`${stackElem}`] !== char) {
                return false
            }
        }
    }

    return stack.length == 0
}

//repeatt