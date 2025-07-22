//https://leetcode.com/problems/add-two-numbers/
//time complexity: O(n)
//space complexitty: O(n)

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let sum = 0, carry = 0, digit = 0;
    while( l1 || l2 || carry){
        sum = carry + (l1?.val || 0 ) + (l2?.val || 0);
        carry = Math.floor(sum/10);
        digit = Math.floor(sum%10);
        res.next = new ListNode(digit); //point dummt to new node;
        res = res.next;//now dummty is new node , so that it can point to next nodes
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return res.next;
}