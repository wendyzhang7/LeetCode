/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //let the head be a dummy ListNode. that starts with anything (let's use -101 as an example)
    let dummy = new LinkedNode(-101); 
    let head = dummy;
    //now we have a linked list that starts with -101, we are gonna start comparing the head node's value of l1 and l2, and adding the smaller one onto the dummy node
    //while l1 is not null and l2 is not null
    //when l1.val <= l2.val
    //dummy.next = l1.val
    //now that list1 contains only 3 and 4, we will reset l1 to l1.next
    //when l1.val < l2.val
    //dummy.next = l2.val
    //reset l2 to l2.next
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    //now that we are adding nodes at the end of dummy linked list, we need to update dummy linkedlists's value to the newly added node
    //dummy = dummy.next => then we are adding new node to the newest added node.
    
    //above step accounts for when there is existing nodes left in l1 and l2
    //when there is no-nodes left (l1 === null or l2 === null), we wanna add the rest of the other not null list's node onto dummy
    //if l1 ===null, dummy,next = l2;
    //else if l2 === null, dummy.next = l1;
    
    //now the only problem left is that the dummy linked list has a head node val=-101;
    //so we are returning head.next not dummy
    if (list1 === null) {
        dummy.next = list2;
    } else if (list2 === null) {
        dummy.next = list1;
    }
    
    return head.next;
};


class LinkedNode {
    constructor (val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

