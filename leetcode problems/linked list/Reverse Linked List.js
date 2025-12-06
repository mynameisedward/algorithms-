// Основная идея: prev = null; current = head
//              поочередно переворачиваем ссылки и возвращаем prev, 

function reverseList(head) {
    let prev = null
    let current = head

    while(current) {
        let tmp = current.next
        current.next = prev
        prev = current
        current = tmp
    }
    return prev
}


//repeat