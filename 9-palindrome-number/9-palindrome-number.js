/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var splitArr = x.toString().split('');
    
    var reverseArr = splitArr.reverse();
    
    var reverseStr = parseInt(reverseArr.join(''));
    
    if (reverseStr === x) {
        return true;
    } else return false;
};