// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

function deleteDuplicates(head) {
    if(!(head)) {
        return null
    }

    let current = head
    while(current.next) {
        if(current.next.val === current.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    
    return head
}

//repeat    