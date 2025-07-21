//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//time complexity: O(n)
//space complexitty: O(1)

var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        } else{
            curr = curr.next;
        }
    } 
    return head;
};