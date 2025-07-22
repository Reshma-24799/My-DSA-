//https://leetcode.com/problems/odd-even-linked-list/
//time complexity: O(n)
//space complexitty: O(1)

var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;
    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
}