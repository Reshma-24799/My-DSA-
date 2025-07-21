//https://leetcode.com/problems/palindrome-linked-list/
//time complexity: O(n)
//space complexitty: O(1)
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow;
    while(curr !== null){
        let temp =  curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let end = prev;
    let start = head;
    while(end !== null){
        if(start.val !== end.val) return false;
        start = start.next;
        end=end.next;
    }
    return true;

  
};