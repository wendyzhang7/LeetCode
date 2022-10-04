/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var arr = [];
    
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    
    console.log(arr);
    
    return arr.join('') === arr.reverse().join('');

};

