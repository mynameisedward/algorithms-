"use strict"

let numbers = [-4, -1, 0, 2, 5, 7, -5, -6]

function algo(arr) {
    let answer = -1

    for(let elem of arr) {
        if((elem % 2 == 0) && ((answer == -1) || (elem < answer))) {
            answer = elem
        }
    }

    console.log(answer)
}

algo(numbers)

// если бы число в условие было нечетное, то в answer пишем flag = False
