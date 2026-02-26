// Основная идея: XOR, применяем XOR к каждому элементу массива, в конце останется единственный элемент

function singleNumber(nums) {
    let mask = 0

    for(let num of nums) {
        mask = mask ^ num
    }

    return mask
}