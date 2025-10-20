// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

var longestSubarray = function(nums) {
    let k = 1
    let begin = 0
    let window_state = 0
    result = 0

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


        if((end - begin + 1) > result ) result = (end - begin + 1) 
    }

    return result - 1
};