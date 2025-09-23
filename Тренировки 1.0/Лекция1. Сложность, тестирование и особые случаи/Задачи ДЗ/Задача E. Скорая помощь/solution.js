// K1, M, K2, P2, N2
// 89  20  41  1  11


const K1 = 89
const M = 20 
const K2 = 41
const P2 = 1
const N2 = 11 



const flatsOnN = Math.round(K2 / N2)
const flatsOnP = flatsOnN * M

const P1 = Math.ceil(K1 / flatsOnP)

