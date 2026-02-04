// Основная идея: ищем левую границу, а затем правую. Binary Search

function searchRange(nums, target) {
    const result = []

    let low = 0
    let high = nums.length - 1

    while(low <= high)  {
        const mid = Math.floor((low + high) / 2)

        if(nums[mid] === target) {
            result[0] = mid
            high = mid - 1
            continue
        }

        if(nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    if(result.length === 0) {
        return [-1, -1]
    }

    low = 0
    high = nums.length - 1

    while(low <= high) {
        const mid = Math.floor((low + high) / 2)

        if(nums[mid] === target) {
            result[1] = mid
            low = mid + 1
            continue
        }

        if(nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return result
}