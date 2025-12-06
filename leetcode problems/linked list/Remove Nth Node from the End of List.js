// Основная идея: dummy node + 2 указателя(даем фору первому)

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeNthNode(head, n) {

    let dummy = new ListNode(0, head)
    head = dummy

    let first = head
    let second = head

    for(let i = 0; i < n + 1; i++) {
        first = first.next
    }

    while(first) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next

    return head.next

}

//repeat