// Основная идея: алгоритм Флойда

function hasCycle(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next

        if(slow == fast) {
            return true
        }
    }

    return false
}

//repeat