
let algo = (string) => {

    str_set = new Set(string)

    for(let elem of str_set) {
        count = 0
        for(let i in string) {
            if(string[i] == elem) {
                count += 1
            }
        }

    }
}

