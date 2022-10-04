/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    let dummy = new ListNode(null);
    dummy.next = head;
    let current = dummy;
    
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } 
        else {
            current = current.next;
        };
    }
    
    return dummy.next;
};