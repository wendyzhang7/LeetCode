/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums=nums.sort((a,b)=>(a-b));
    
    for (var i=0; i<nums.length -1; i++) {
        if (nums[i] === nums[i+1]) return true;
        // for (var k=i+1; k<nums.length; k++) {
        //     if (nums[i] === nums[k]) {
        //         return true;
        //     } 
        // }
    }
    return false;
};