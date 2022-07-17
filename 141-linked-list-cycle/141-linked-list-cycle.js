/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//we are going to use a two pointer system
//one fast pointer: move two nodes at a time
//one slow pointer: move one node at a time
//if at any point, fast === slow, meaning there are two node that points to the same node
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    //fast && fast.next allows it to move 2 at a time 
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) return true;
    } 
    return false;
};

