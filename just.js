function isSubsequence(s, t) {
    let sPointer = 0

    for(let i in t) {
        if(t[i] == s[sPointer]) {
            sPointer += 1
            continue
        } else {
            continue
        }
    }

    return sPointer == s.length
}

console.log(isSubsequence("abc", "ahbgd"))