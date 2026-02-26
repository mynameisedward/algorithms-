function findDisappearedNumbers(nums) {
    let i = 0
    while(i < nums.length) {
        const pos = nums[i] - 1
        if(nums[i] != nums[pos]) {
            [nums[i], nums[pos]] = [nums[pos], nums[i]]
        } else {
            i += 1
        }
    }
    
    const miss = []
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== (i + 1)) {
            miss.push(i + 1)
        }
    }
    
    return miss
}