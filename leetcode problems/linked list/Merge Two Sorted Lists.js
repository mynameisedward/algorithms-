// Основная идея: сшиваем 
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

// repeatt