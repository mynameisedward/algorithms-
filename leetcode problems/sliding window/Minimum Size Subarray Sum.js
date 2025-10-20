// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Решаем через Sliding Window


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