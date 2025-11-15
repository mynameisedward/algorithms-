function evalRPN(tokens) {
    let stack = []
    let operands = ['+', '-', '*', '/']

    for(let token of tokens) {
        if(operands.includes(token) && (stack.length > 0)) {

        } else {
            stack.push(Number(token))
        }
    }
}