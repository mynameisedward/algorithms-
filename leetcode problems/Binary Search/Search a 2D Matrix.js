// Основная идея: заводим виртуальный 1DMatrix-индекс и ищем элемент

function searchMatrix(matrix, target) {
    const cols = matrix[0].length
    const rows = matrix.length

    let low = 0
    let high = cols * rows - 1

    while(low <= high) {
        const mid = Math.floor((low + high) / 2)

        const row = Math.floor(mid / cols)
        const col = mid % cols
        const elem = matrix[row][col]
        
        if(elem === target) {
            return true
        }
        
        if(elem > target) {
            high = mid - 1 
        } else {
            low = low + 1
        }
    }

    return false
}
