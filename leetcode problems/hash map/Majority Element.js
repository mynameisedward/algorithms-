// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = {}
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] += 1
        } else {
            hashMap[nums[i]] = 1
        }
    }
    let max
    let counter = 0
    for(let key in hashMap) {
        if(hashMap[key] > counter) {
            counter = hashMap[key]
            max = Number(key)
        }
    }
    return max
};