// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!(head)) {
        return null
    }

    // считаем количество нод
    let dummy = head
    let length = 1
    while(dummy.next) {
        dummy = dummy.next
        length += 1
    }

    let position = k % length

    if(position === 0 ) return head

    let current = head
    for(let i = 0; i < length - position - 1; i++) {
        current = current.next
    }

    let newHead = current.next
    current.next = null
    dummy.next = head

    return newHead

};
// repeat