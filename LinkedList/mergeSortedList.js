//https://leetcode.com/problems/merge-two-sorted-lists/
//time complexity: O(n)
//space complexitty: O(n)

var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(0);
    let curr = res;
    while(list1  && list2 ){
        if(list1?.val < list2?.val){
            curr.next = new ListNode(list1.val);
            list1 = list1?.next;
        } else{
            curr.next = new ListNode(list2.val);
            list2 = list2?.next;
        } 
        curr = curr.next;
    }
    curr.next = list1 || list2;
    return res.next;
}