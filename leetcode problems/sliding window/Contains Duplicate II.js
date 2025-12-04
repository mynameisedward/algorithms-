// Основная идея: Sliding Window + Set

function algo(nums, k) {
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


// repeat