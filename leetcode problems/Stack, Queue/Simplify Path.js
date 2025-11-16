let string = "/home/user//Documents/../Pictures"

let withoutSlash = string.split('/')

console.log(withoutSlash)

let stack = []

for(let elem of withoutSlash) {
    if((elem == '') || (elem == '/')) {
        continue
    } else if(elem == '..') {
        if(stack.length > 0) {
            stack.pop()
        }
    } else {
        stack.push(elem)
    }
}

const result = '/' + stack.join('/')

// repeat