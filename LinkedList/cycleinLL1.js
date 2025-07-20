//https://leetcode.com/problems/linked-list-cycle/

//approach 1- use Set
//time complexity: O(n)
//space complexity: O(1)
var hasCycle = function(head) {
    const list = new Set();
    let curr = head;
    while(curr !== null){
        if(list.has(curr)){
            return true;
        }
        list.add(curr);
        curr = curr.next;
    }
    return false;
}

//floyd's algorithm - use slow and fast pointer, if slow === fast , cycle
//time complexity: O(n)
//space complexity: O(1)
var hasCycle = function(head) {
    if(!head) return false;
    let slow = head;
    let fast = head.next;
    while(slow !== fast){
         if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
       
    }
    return true;
};