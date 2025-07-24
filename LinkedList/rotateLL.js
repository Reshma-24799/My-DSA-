//https://leetcode.com/problems/rotate-list/
//time complexity: O(n)
//space complexitty: O(1)

var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let len = 0;
    let curr = head;
    while(curr){
        len++;
        curr = curr.next;
    }
    k = k % len;
    if(k == 0) return head;
    let slow = head;
    let fast = head;
    let i = 0;
    while(fast && fast.next) {
        if(i<k){
            fast = fast.next;
        }else{
            slow=slow.next;
            fast = fast.next;
        }
        i++;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead;
};