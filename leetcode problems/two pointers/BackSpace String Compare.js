// Задача: даны строки типа "ab#c" и "ad#c", где # - это backspace
//            Вернуть равны ли строки 

// Example:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

function getCurrentIndex(s, i) {
    let to_skip = 0
    while(i >= 0) {
        if(s[i] == '#') {
            to_skip += 1
        } else if((to_skip > 0) && (s[i] != '#')) {
            to_skip -= 1
        } else {
            break
        }

        i -= 1
    }
    return i
}

function backspaceCompare(s1, s2) {
    let i = s1.length - 1
    let j = s2.length - 1

    while((i >= 0) || (j >= 0)) {
        i = getCurrentIndex(s1, i)
        j = getCurrentIndex(s2, j)

        if((i < 0) && (j < 0)) {
            return true
        } 
        if((i < 0) || (j < 0)) {
            return false
        }
        if(s1[i] != s2[j]) {
            return false
        }

        i -= 1
        j -= 1
    }

    return true
    
}

console.log(backspaceCompare("bxj##tw", "bxo#j##tw"))

//  *
// "bxj##tw"
//  btw

//      *
// "bxo#j##tw"