// Основная идея: идем с конца первого массива и заполняем числа, сравнивая


function merge(nums1, m, nums2, n) {
    let firstPointer = m - 1
    let secondPointer = n - 1
    let rightPointer = m + n - 1

    while(secondPointer >= 0) {
        if(firstPointer >= 0 && nums1[firstPointer] > nums2[secondPointer]) {
            nums1[rightPointer] = nums1[firstPointer]
            firstPointer -= 1
        } else {
            nums1[rightPointer] = nums2[secondPointer]
            secondPointer -= 1
        }
        right -= 1
    }
}