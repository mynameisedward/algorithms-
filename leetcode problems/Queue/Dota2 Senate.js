function predictPartyVictory(senate) {
    const rQueue = []
    const dQueue = []
    const len = senate.length

    for(let i = 0; i < senate.length; i++) {
        if(senate[i] === 'R') {
            rQueue.push(i)
        } else {
            dQueue.push(i)
        }
    }

    while(rQueue.length > 0 && dQueue.length > 0) {
        const r_index = rQueue.shift()
        const d_index = dQueue.shift()

        if(r_index < d_index) {
            rQueue.push(r_index + len)
        } else {
            dQueue.push(d_index + len)
        }
    }

    return rQueue.length > 0 ? 'Radiant' : 'Dire'
}