// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// РЕШЕНИЕ: используем быстрый и медленный указатель
    // быстрый шагает в два раза быстрее 
    // и когда быстрый достигнет конца, медленный будет только на пол-пути


function middleNode(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}