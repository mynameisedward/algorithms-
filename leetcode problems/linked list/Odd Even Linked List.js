// Основная идея: Делаем 2 указателя: odd и even. Сшиваем odd и even параллельно, и когда закончим сшивать odd просто добавляем к нему even_head

function oddEvenList(head) {
    if(!head || !head.next) {
        return head
    }

    let odd = head
    let even = head.next
    const even_head = even

    while(even && even.next) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    odd.next = even_head


    return head
}