// Основная идея: спуск и склон, двигаемся на пик

function findPeakELement(nums) {
    let low = 0
    let high = nums.length - 1

    while(low < high) {
        const mid = Math.floor((low + high) / 2)

        if(nums[mid] < nums[mid + 1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}