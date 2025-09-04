

myObj = {
    'a': 1,
    'b': 2,
}

let algo = (string) => {

    obj = {}

    for(let symbol of string) {
        if(obj[symbol] == undefined) {
            obj[`${symbol}`] = 1
        } else {
            obj[`${symbol}`] += 1
        }
    }
    
    most = ''
    count = 0


    for(let elem in obj) {
        if(obj[elem] > count){
            count = obj[elem]
            most = String(elem)
        }
    }

    console.log(`most: ${most}, count: ${count}`)


}


algo('abaas;dkadfkahsdlkfhdsalkfhlkajhdlkahfdakjdshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfba')


