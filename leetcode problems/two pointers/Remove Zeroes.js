

function removeZeroes(nums) {
    w = 0

    for(let r in nums) {
        if(nums[r] != 0) {
            [nums[w], nums[r]] = [nums[r], nums[w]]
            w += 1
        }
    }
}
//        w                      * 
//            [1, 2, 5, 0, 0, 0, 4]
//        r                      *

let yo = [1, 2, 5, 0, 0, 0, 4]

removeZeroes(yo)

console.log(yo)