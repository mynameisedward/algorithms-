// Задача: является ли s подпоследовательностью t

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Решение: через 2 указателя на каждой последовательности

function isSubsequence(s, t) {

    let sPointer = 0
    for(let i in t) {
        if(t[i] == s[sPointer]) {
            sPointer += 1
        } else if(t[i] != s[i]) {
            continue
        }
    }

    return sPointer == s.length
}

console.log(isSubsequence("abc", "ahbgdc"))
//     *
// t = ahbgdc

//     *
// s = abc