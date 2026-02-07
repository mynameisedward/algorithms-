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