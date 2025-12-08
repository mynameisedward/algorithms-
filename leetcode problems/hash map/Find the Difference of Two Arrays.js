function findDifference(nums1, nums2) {
    const set1 = new Set()
    const set2 = new Set()
    const result = [[], []]

    for(let elem of set1) {
        if(!set1.has(elem)) {
            result[0].push(elem)
        }
    }

    for(let elem of set2) {
        if(!set2.has(elem)) {
            result[1].push(elem)
        }
    }

    return result
}