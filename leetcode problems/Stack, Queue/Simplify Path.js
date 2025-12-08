// Основная идея: делим по /, проходимся и добавляем в стек


var simplifyPath = function(path) {
    const stack = []
    const pathSplit = path.split("/")

    for(let elem of pathSplit) {
        if((elem === '.') || (elem === '')) {
            continue
        } else if(elem == '..') {
            stack.pop()
        } else {
            stack.push(elem)
        }
    }

    return '/' + stack.join('/')
};

// repeatt