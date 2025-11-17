function reorderList(head) {
    let stack = []

    let dummy = new ListNode(null, head)
    let fast = dummy
    let slow = dummy
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let stackElem = slow.next
    while(stackElem) {
        stack.push(stackElem)
        stackElem = stackElem.next
    }
    slow.next = null


    let current = head
    while(stack.length > 0) {
        let stackElem = stack.pop()
        let tmp = current.next
        current.next = stackElem
        stackElem.next = tmp
        current = current.next.next
    }
}