// Задача: удалить центральную ноду связанного списка

// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 

// Решение: Решаем также через быстрый и медленный, но даем фору быстрому в 2 шага
//          Медленный тогда оказывается за один элемент до середины и мы спокойно удаляем центральную ноду



function deleteMiddle(head) {

    if(!(head.next)) {
        return null
    }

    let slow = head
    let fast = head.next.next

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = slow.next.next

    return head
}

//repeat
    