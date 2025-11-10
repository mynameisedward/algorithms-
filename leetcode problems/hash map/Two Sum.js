// Input: nums = [2, 7, 11, 15]; target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 9


function twoSum(nums, target) {
    let hashMap = {}

    for(let i = 0; i < nums.length; i++) {
        let second = target - nums[i]

        if(hashMap.hasOwnProperty(second)) {
            return [hashMap[second], i]
        }

        hashMap[nums[i]] = i
    }
}

