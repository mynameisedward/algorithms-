// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

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


// 2

// |b
// [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
//              e|