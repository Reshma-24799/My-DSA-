https://leetcode.com/problems/swap-nodes-in-pairs/
//time complexity: O(n)
//space complexitty: O(1)

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode(0,head);
    let prev = dummy;
    while(prev.next && prev.next.next ){
        let first = prev.next;
        let second = prev.next.next;
        
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
    }
    return dummy.next;;
};

//time complexity: O(n)
//space complexitty: O(n)
//recursive approach
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};