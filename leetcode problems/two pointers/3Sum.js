// ОСНОВНАЯ ИДЕЯ - отсортировать массив, поставить 3 указателя и двигаться 



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length; i++) {
        let j = i + 1
        let k = nums.length - 1
        
        if(nums[i] === nums[i - 1]) {
            continue
        }


        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k] 
            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]] )
                j += 1
                while(nums[j] === nums[j - 1]) {
                    j += 1
                }
            } else if(sum > 0) {
                k -= 1
            } else if(sum < 0) {
                j += 1
            }
        }
    }

    return result
};