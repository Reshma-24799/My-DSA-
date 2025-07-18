//https://leetcode.com/problems/design-linked-list/?envType=problem-list-v2&envId=linked-list


function Node(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index <0 || index >= this.size) return -1;
    let curr = this.head;
    for(let i = 0;i<index;i++){
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head === null){
        this.head = newNode;
    } else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <0 || index > this.size) return;
    if(index === 0 ) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    let i = 0;
    let curr = this.head;
    while(i<index-1){
        curr = curr.next;
        i++;
    }
    let newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index <0 || index >= this.size) return;
    let curr = this.head;
    if(index === 0 ){
        this.head = curr.next;
    } else{
       
        let i = 0;
        while(i<index-1){
            curr = curr.next;
            i++;
        }
        curr.next =  curr.next.next;
    }
    
    this.size--;
};

