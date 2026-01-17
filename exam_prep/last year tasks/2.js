function algo(numb) {
    if(numb < 7) {
        return -1
    }
    const flowers = []
    let total = 0
    let ostatok = numb
    
    while(flowers.length < 3) {
        let stepen = Math.floor(Math.log2(ostatok))
        if((ostatok - (2 ** stepen)) >= 3) {
            if((ostatok - (2 ** stepen)) === 3) {
                return numb
            } else {
                flowers.push(stepen)
                ostatok = ostatok - (2 ** stepen)
                total += 2 ** stepen
            }
        } else {
            stepen -= 1
            total += 2 ** stepen
            ostatok = ostatok - (2 ** stepen)
            flowers.push(stepen)
        }
    }


    return (total !== -1) ? total : -1 
}

console.log(algo(6))
console.log(algo(100))