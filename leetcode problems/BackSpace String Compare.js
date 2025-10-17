// Задача: даны строки типа "ab#c" и "ad#c", где # - это backspace
//            Вернуть равны ли строки 

// Example:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

function backspaceCompare(s1, s2) {
    let p1 = s1.length - 1
    let p2 = s2.length - 1
    let p1BP = 0
    let p2BP = 0

    while((p1 >= 0) && (p2 >= 0)) {
        if((s1[p1] == '#')) {
            p1BP += 1
            p1 -= 1
        } else if((s1[p1] != '#') && (p1BP > 0)) {
            if(s1[p1 - 1] == '#') {
                p1 -= 1
                p1BP -= 1
            } else {
                p1 -= p1BP
                p1BP = 0
            }
        }

        if((s2[p2] == '#')) {
            p2BP += 1
            p2 -= 1
        } else if((s2[p2] != '#') && (p2BP > 0)) {
            if(s1[p1 - 1] == '#') {
                p2 -= 1
                p2BP -= 1
            } else {
                p2 -= p2BP
                p2BP = 0
            }
        }

        if(((s1[p1] != '#') && (p1BP == 0)) && ((s2[p2] != '#') && (p2BP == 0)) && (s1[p1] != s2[p2])) {
            return false
        } else {
            p1 -= 1
            p2 -= 1
        }
    }

    return true
}

console.log(backspaceCompare("asd###asss#s", "as##g#asss"))

// *      
// asd###asss#s

// das##g##asss