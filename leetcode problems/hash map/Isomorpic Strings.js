// Основная идея: 2е хэш-таблицы для каждой строки
//                для каждого i-го элемента первой строки должен быть один и тот же индекс для i-го элемента второй строки


function isIsomorphic(s, t) {
    const sTable = new Map()
    const tTable = new Map()

    for(let i = 0; i < s.length; i++) {
        if(!(sTable.has(s[i]))) {
            sTable.set(s[i], i)
        }

        if(!(tTable.has(t[i]))) {
            tTable.set(t[i], i)
        }

        if(sTable.get(s[i]) !== tTable.get(t[i])) {
            return false
        }
    }


    return true
}