// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

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

