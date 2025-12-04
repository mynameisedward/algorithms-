// Основная идея: Map + Sliding Window
// создаем объект и если свойств больше чем 2, то поджимаем окно


function totalFruit(fruits) {
    
    let begin = 0
    let window_state = {}
    let result = 0

    for(let end = 0; end < fruits.length; end++) {
        if(!(fruits[end] in window_state)) {
            window_state[fruits[end]] = 1
        } else {
            window_state[fruits[end]] += 1
        }

        while(Object.keys(window_state).length > 2) {
            window_state[fruits[begin]] -= 1
            if(window_state[fruits[begin]] == 0) {
                delete window_state[fruits[begin]]
            }    
            begin += 1
        }

        if(result < (end - begin + 1)) {
            result = end - begin + 1
        }
    }

    return result
}

// repeat