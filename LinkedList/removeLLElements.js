//https://leetcode.com/problems/remove-linked-list-elements/
//time complexity: O(n)
//space complexitty: O(1)



var removeElements = function(head, val) {
    let sentinel = new ListNode(0,head);
    let curr = sentinel;
    while(curr !== null && curr.next !== null){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        }else{
              curr = curr.next;
        }
      
    }
    return sentinel.next;
};