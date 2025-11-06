Input: head = [1,2,3,4]

Output: [2,1,4,3]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Тесты на нулевой и единичный head
    if(!(head)) return null
    if(!(head.next)) return head

    // Сделал заглушку в начале - dummy Node
    let dummy = new ListNode(0, head)
    head = dummy
    let current = head

    

    // Основная логика
    while(current.next && current.next.next) {
        // Поставил указатели
        let first = current.next
        let second = current.next.next

        // Аккуратная бухгалтерия
        first.next = second.next
        second.next = first
        current.next = second
        current = first
    }


    return head.next

};