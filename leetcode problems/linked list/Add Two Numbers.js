// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode()
    let current = head

    let p1 = l1
    let p2 = l2

    let tmp = 0
    while (p1 && p2) {
        let newNode = new ListNode()
        let sum = p1.val + p2.val + tmp
        if (sum > 9) {
            newNode.val = Number(String(sum)[1])
            tmp = 1
        } else {
            newNode.val = sum
            tmp = 0
        }
        current.next = newNode
        current = newNode
        p1 = p1.next
        p2 = p2.next
    }

    // добавить остаток
    while (p1) {
        if (tmp === 0) {
            current.next = p1
            break
        } else {
            let newNode = new ListNode()
            let sum = p1.val + tmp
            if (sum > 9) {
                newNode.val = Number(String(sum)[1])
                tmp = 1
            } else {
                newNode.val = sum
                tmp = 0
            }
            current.next = newNode
            current = newNode
            p1 = p1.next
        }
    }

    while (p2) {
        if (tmp === 0) {
            current.next = p2
            break
        } else {
            let newNode = new ListNode()
            let sum = p2.val + tmp
            if (sum > 9) {
                newNode.val = Number(String(sum)[1])
                tmp = 1
            } else {
                newNode.val = sum
                tmp = 0
            }
            current.next = newNode
            current = newNode
            p2 = p2.next
        }
    }

    if (tmp) {
        let newNode = new ListNode(1, null)
        current.next = newNode
        current = newNode
    }


    return head.next
};

// repeat