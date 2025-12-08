// Основная идея: добавляем в стек пока не встречаем ']'


var decodeString = function(s) {
    let stack = []
    for(let char of s) {
        if(char !== ']') {
            stack.push(char)
            continue
        }
        let last = stack.pop()
        let str = ''
        while(last !== '[') {
            str = last + str
            last = stack.pop()
        }
        let numb = ''
        last = stack.pop()
        while(!Number.isNaN(Number(last))) {
            numb = last + numb
            last = stack.pop()
        }
        stack.push(last)    
        stack.push(str.repeat(Number(numb)))
    }
    return stack.join("")
};
