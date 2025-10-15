// вернуть true если строка - палиндром, иначе - false
// решение: 2 указателя


function formatString(string) {
    let result = ''

    for(let elem of string) {
        let charSymbol = elem.charCodeAt(0)
        
        if((charSymbol >= 65 && charSymbol <= 90) || (charSymbol >= 97 && charSymbol <= 122) || (/^\d+$/.test(elem))) {
            result += elem.toLowerCase()
        }
    }

    
    return result
}

// formatString('A man, a plan: panama')


function isPalindrome(string) {
    let str = formatString(string)
    
    console.log(str)

    left = 0
    right = str.length - 1

    while(left < right) {
        if(str[left] != str[right]) {
            console.log(false)
            return false
        } else if(str[left] == str[right]) {
            left += 1
            right -= 1
        }
    }


    console.log(true)
    return true
}

isPalindrome('0P')