// Дана последовательность слов
//          нужно вывести все самые короткие слова через пробел


let words = ['aa', 'b', 'ccc', 'd']

function algo(words) {
    let count_letters_min_string = words[0].length

    for(let elem of words) {
        if(elem.length < count_letters_min_string) {
            count_letters_min_string = elem.length
        }
    }

    let short_words = []

    for(let elem of words) {
        if(elem.length == count_letters_min_string) {
            short_words.push(elem)
        }
    }

    console.log(short_words)
}

algo(words)

