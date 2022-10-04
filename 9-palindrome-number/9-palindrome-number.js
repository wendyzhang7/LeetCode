/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var reverseStr = parseInt(x.toString().split('').reverse().join(''));
    
    if (reverseStr === x) {
        return true;
    } else return false;
};