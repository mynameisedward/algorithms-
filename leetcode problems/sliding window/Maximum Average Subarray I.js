// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Решаем через sliding window  

var findMaxAverage = function(nums, k) {
    let start = 0
    let window_state = 0
    let max_average = -Infinity

    for(let end = 0; end < nums.length; end++) {
        window_state += nums[end]
        if((end - start + 1) == k) {
            if(window_state > max_average) {
                max_average = window_state
            }
            window_state -= nums[start]
            start += 1
        }
    }

    return max_average / k
};