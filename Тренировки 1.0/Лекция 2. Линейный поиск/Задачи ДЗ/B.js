function algo(arr) {

    let isConstant = true

    for(let i in arr) {
        if(arr[i] == -2000000000) break
        if(arr[i] != arr[0]) {
            isConstant = false
        }
    }

    let ascending = true
    let weakly_ascending = true
    let descending = true
    let weakly_descending = true
    

    for(let i in arr) {
        if(arr[i] == -2000000000) break

        if(arr[i] > arr[i - 1]) {
            descending = false
            weakly_descending = false
        } else if(arr[i] < arr[i - 1]) {
            ascending = false
            weakly_ascending = false
        } else {
            ascending = false
            descending = false
        }
    }

    
    if(isConstant) {
        console.log('CONSTANT')
        return 'CONSTANT'
    }
    if(ascending) {
        console.log('ASCENDING')
        return('ASCENDING')
    }
    if(weakly_ascending) {
        console.log("WEAKLY ASCENDING")
        return("WEAKLY ASCENDING")
    }
    if(descending) {
        console.log("DESCENDING")
        return("DESCENDING")
    }
    if(weakly_descending) {
        console.log("WEAKLY DESCENDING")
        return("WEAKLY DESCENDING")
    }
    
}

let test = [1, 2, 2, -20000]

algo(test)