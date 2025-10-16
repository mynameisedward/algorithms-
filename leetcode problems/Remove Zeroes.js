

function removeZeroes(nums) {
    let k = 0
    let i = -1


    while(k < nums.length) {
        if((nums[k] != 0) && (nums[i] == 0)) {
            [nums[k], nums[i]] = [nums[i], nums[k]]
            i += 1
        } else if(nums[i] != 0) {
            i += 1
        }
        k += 1
    }
}
//        k                      *
//            [1, 2, 5, 0, 0, 0, 4]
//        i             *

let yo = [1, 2, 5, 0, 0, 0, 4]

removeZeroes(yo)

console.log(yo)