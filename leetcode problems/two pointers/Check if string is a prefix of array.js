// Example:

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together


function isPrefixString(s, words) {
    let sPointer = 0;

    for(let i in words) {
        for(let j = 0; j <= words[i].length - 1; j++) {
            if((sPointer == s.length) && (j == 0)) {
                break
            }
            if(words[i][j] != s[sPointer]) {
                return false
            } else if(sPointer <= s.length ) {
                sPointer++
            } 
        }  
    }


    return s.length == sPointer
}