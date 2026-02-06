// Основная идея: Ложим в стек астероиды и при условиях сталкиваем их

function znak(number) {
    if(number > 0) {
        return 'positive'
    } else {
        return 'negative'
    }
}

var asteroidCollision = function(asteroids) {
    const stack = [asteroids[0]]

    for(let i = 1; i < asteroids.length; i++) {
        if(znak(asteroids[i]) === znak(stack[stack.length - 1])) {
            stack.push(asteroids[i])
        } else {
            stack.push(asteroids[i])
            while(znak(stack[stack.length - 1]) === 'negative' && znak(stack[stack.length - 2]) === 'positive') {
                const first = stack.pop()
                const second = stack.pop()
                if(Math.abs(first) === Math.abs(second)) {
                    continue
                }

                if(Math.abs(first) > Math.abs(second)) {
                    stack.push(first)
                } else {
                    stack.push(second)
                }

                if(stack.length === 1) {
                    break
                }
            }
        }
    }

    return stack
};
