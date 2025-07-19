//https://leetcode.com/problems/reverse-linked-list/

var reverseLL = function(head){
    let prev = null;
    let curr = head;
    while(curr !== null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
}