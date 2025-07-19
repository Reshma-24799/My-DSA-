//https://leetcode.com/problems/middle-of-the-linked-list/
//time complexity: O(N)
//space complexity: O(1)
//Tortoise and Hare Problem

var middle = function(head){
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}