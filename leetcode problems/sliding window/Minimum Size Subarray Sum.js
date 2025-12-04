// Решаем через Sliding Window
// Основная идея: расширяем окошко и поджимаем его пока сумма больше target, фиксируя минимальный размер окна 


var minSubArrayLen = function(target, nums) {
    let begin = 0
    let window_state = 0
    let result = +Infinity

    for(let end = 0; end < nums.length; end++) {
        window_state += nums[end]
        while(window_state >= target) {
            let window_size = end - begin + 1
            if(window_size < result) {
                result = window_size
            }
            window_state -= nums[begin]
            begin += 1
        }
    }

    if(result == +Infinity) {
        return 0
    } else {
        return result
    }

};

// repeat