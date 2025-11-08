/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    function middleOfTheList(head) {
        let slow = head
        let fast = head

        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
    function reverseList(head) {
        let prev = null
        let current = head

        while (current) {
            let tmp = current.next
            current.next = prev
            prev = current
            current = tmp
        }
        return prev
    }

    let middle = middleOfTheList(head)
    let second = reverseList(middle)
    let first = head

    while(first && second) {
        if(first.val != second.val) {
            return false
        }
        first = first.next
        second = second.next
    }
    
    return true
};

//repeat