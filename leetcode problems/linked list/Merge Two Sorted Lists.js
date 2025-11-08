// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let current = dummy

    let first = list1
    let second = list2

    while(first && second) {
        if(first.val < second.val) {
            current.next = first
            first = first.next
        } else {
            current.next = second
            second = second.next
        }

        current = current.next
    }

    if(first) {
        current.next = first
    }
    if(second) {
        current.next = second
    }

    return dummy.next
};

// repeat