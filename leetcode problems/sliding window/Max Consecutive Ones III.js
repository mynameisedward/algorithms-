// Основная идея: Sliding Window, считаем нули и поджимаем когда нулей становится больше чем можно


var longestOnes = function(nums, k) {
    let begin = 0
    let window_state = 0
    let result = 0

    for(let end = 0; end < nums.length; end++) {
        if(nums[end] == 0) {
            window_state += 1 
        }

        while(window_state > k) {
            if(nums[begin] == 0) {
                window_state -= 1
            }
            begin += 1
        }

        let window_size = end - begin + 1
        if(window_size > result) {
            result = window_size
        }
    }
    

    return result
};

// repeat