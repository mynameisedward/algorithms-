// Основная идея: Sliding Window + Set


function algo(s) {
    let begin = 0
    let window_state = {}
    let result = 0

    for(let end = 0; end < s.length; end++) {
        if(!(s[end] in window_state)) {
            window_state[s[end]] = 1
        } else {
            window_state[s[end]] += 1
            while(window_state[s[end]] > 1) {
                if(s[begin] == s[end]) {
                    window_state[s[end]] -= 1
                    begin += 1
                    continue
                } else {
                    window_state[s[begin]] -= 1
                    if(window_state[s[begin]] == 0) {
                        delete window_state[s[end]]
                    }
                    begin += 1
                }
            }
            if((end - begin + 1) > result) {
                result = end - begin + 1
            }
        }
        if((end - begin + 1) > result) {
            result = end - begin + 1
        }
    }
    
    console.log(window_state)
    return result
}

// repeat