function searchInsert(nums, target) {
    let low = 0
    let high = nums.length - 1

    while(low <= high) {
        let mid = Math.floor((high + low) / 2)
        let guess = nums[mid]

        if(guess === target) {
            return mid
        }

        if(guess < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }


    return low
}