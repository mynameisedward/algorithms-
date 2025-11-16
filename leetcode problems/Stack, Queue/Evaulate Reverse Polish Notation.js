function evalRPN(tokens) {
    let stack = []
    let operands = ['+', '-', '*', '/']

    for(let token of tokens) {
        if(operands.includes(token) && (stack.length > 0)) {
            let first = stack.pop()
            let second = stack.pop()
            switch(token) {
                case '+':
                    stack.push(first + second)
                    break
                case '-':
                    stack.push(second - first)
                    break
                case '*':
                    stack.push(first * second)
                    break
                case '/':
                    stack.push(Math.trunc(second / first))
                    break
            }
        } else {
            stack.push(Number(token))
        }
    }

    return stack[0]
}

//repeat