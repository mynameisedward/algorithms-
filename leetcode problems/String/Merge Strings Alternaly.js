// Основная идея: по указателю на строку и всё. Если что-то остается, докидываем

function mergeAlternately(word1, word2) {
    let p1 = 0
    let p2 = 0
    let result = ''

    while((p1 < word1.length) && (p2 < word2.length)) {
        result += word1[p1] + word2[p2]
        p1 += 1
        p2 += 1
    }

    for(let i = p1; i < word1.length; i++) {
        result += word1[i]
    }
    for(let i = p2; i < word2.length; i++) {
        result += word2[i]
    }


    return result 
}