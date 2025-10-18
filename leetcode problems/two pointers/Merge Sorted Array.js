function merge(nums1, m, nums2, n) {
    
    let result = [] 

    let p1 = 0
    let p2 = 0

    while((p1 < m) && (p2 < n)) {
        if(nums1[p1] < nums2[p2]) {
            result.push(nums1[p1])
            p1 += 1
        } else {
            result.push(nums2[p2])
            p2 += 1
        }
    }

    for(let i = p1; i != m; i++) {
        result.push(nums1[i])
    }
    for(let i = p1; i != n; i++) {
        result.push(nums2[i])
    }



    
    

    return result
}

console.log(merge([2, 5, 7, 0, 0, 0, 0], 3, [1, 3, 8, 4], 4))
