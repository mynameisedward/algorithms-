// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

function algo(nums, k) {
    [1, 2, 3]    
//    k = 2

//             |b
//    [1, 2, 3, 1, 2, 3]
//                    e|
    let begin = 0
    let window_state = new Set()

    for(let end = 0; end < nums.length; end++) {
        let size = end - begin
        if(size > k) {
            window_state.delete(nums[begin])
            begin++
        } 

        if(window_state.has(nums[end])) {
            return true
        } else {
            window_state.add(nums[end])
        }
    }

    return false
}
