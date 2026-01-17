// 
function algo(str) {
    const r_index = str.indexOf('R')
    const m_index = str.indexOf('M')

    return r_index < m_index ? 'Yes' : 'No'
}
