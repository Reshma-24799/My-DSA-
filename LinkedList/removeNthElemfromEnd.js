//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//time complexity: O(n)
//space complexitty: O(1)

//aproach 1: 2 pass
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0,head);
    let length = 0;
    while(head){
        length++;
        head=head.next;
    }
    let prevPos = length - n;
    let prev = sentinel;
    for(let i = 0;i<prevPos;i++){
        prev=prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};


//aproach 2: 1 pass
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0,head);
    let slow = sentinel;
    let fast = sentinel;
    let i = 0;
    while(fast && fast.next){
        if(i<n){
            fast = fast.next;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
        i++;
    }
     slow.next = slow.next.next;
    return sentinel.next;
};