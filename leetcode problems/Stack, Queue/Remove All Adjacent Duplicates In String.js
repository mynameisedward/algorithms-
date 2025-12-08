// Основная идея: если последний элемент стека равен текущему, то убираем последний элемент стека
//                иначе ложим элемент в стек, 

function removeDuplicates(s) {
    let stack = []

    for(let char of s) {
        if(stack[stack.length - 1] == char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join("")
}

//repeatt