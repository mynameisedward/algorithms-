function merge(nums1, m, nums2, n) {
    let result = []
    let p1 = 0
    let p2 = 0

    while((p1 < m) || (p2 < n)) {
        if(p1 == m) {
            result.push(nums2[p2])
            p2 += 1
            continue
        } else if(p2 == n) {
            result.push(nums1[p1])
            p1 += 1
            continue
        }
        if(nums1[p1] < nums2[p2]) {
            result.push(nums1[p1])
            p1 += 1
        } else {
            result.push(nums2[p2])
            p2 += 1
        }
    }
    
    for(let i in result) {
        nums1[i] = result[i]
    }

    console.log(result)

    return
}



merge([1,2,3,0,0,0,0], 3, [2,5,6,7], 4)