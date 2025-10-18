// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
//              After sorting, it becomes [0,1,9,16,100].


function sortedSquares(nums) {
    let result = []
    let left = 0
    let right = nums.length - 1

    while(left < right) {
        let leftSquare = nums[left] ** 2
        let rightSquare = nums[right] ** 2

        if(leftSquare > rightSquare) {
            result.unshift(leftSquare)
            left += 1
        } else if(rightSquare >= leftSquare) {
            result.unshift(rightSquare)
            right -= 1
        } else if(rightSquare == leftSquare) {
            result.unshift(leftSquare)
            left += 1
        }
    }
    

    console.log(result)
    return result
}

sortedSquares([-4,-1,0,3,10])