// Задача: найти кол-во уникальных элементов

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Решаем через 2 указателя

//    *
// [0,0,1,1,1,2,2,3,3,4]
//  * 

function removeDuplicates(nums) {
    let k = 0

    for(let i in nums) {
        if(nums[i] != nums[k]) {
            k += 1
            nums[k] = nums[i]
        }
    }

    return k + 1
}
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        //   k    *
const result = removeDuplicates(nums)
//           i    *

console.log(result)