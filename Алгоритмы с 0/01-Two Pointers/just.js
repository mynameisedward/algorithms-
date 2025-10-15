const nums = [1, 2, 3, 4, 5, 6]

for(let i = 0, j = nums.length - 1; i != j; ) {

    console.log(`i = ${nums[i]}`)
    console.log(`j = ${nums[j]}`)
    
    if((j - i) == 1) break

    i++
    j--


}

