// если текущий равняется следующему, то удаляем следующий

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