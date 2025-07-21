//https://leetcode.com/problems/intersection-of-two-linked-lists/
//time complexity: O(m+n)
//space complexity: O(n) // need to create A SET


var getIntersectionNode = function(headA, headB) {
    let list = new Set();
    while(headB !== null){
        list.add(headB);
        headB = headB.next;
    }
    while(headA !== null){
        if(list.has(headA)) return headA;
        headA = headA.next;
    }
    return null;
};