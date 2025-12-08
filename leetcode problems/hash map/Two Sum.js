function twoSum(nums, target) {
    const hashMap = new Map()

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if(hashMap.get(target - num) !== undefined) {
            return [i, hashMap.get(target - num)]
        } else {
            hashMap.set(num, i)
        }
    }
}