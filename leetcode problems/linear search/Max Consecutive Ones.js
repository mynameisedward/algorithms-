// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. 
// The maximum number of consecutive 1s is 3.


function algo(nums) {
    let result = 0
    let currentSum = 0

    for(let i in nums) {
        if(nums[i] != 0) {
            currentSum += 1
        } else if(nums[i] == 0) {
            if(currentSum > result) {
                result = currentSum
            }
            currentSum = 0
        }
    }
    if(currentSum > result) {
        result = currentSum
    }

    return result
}