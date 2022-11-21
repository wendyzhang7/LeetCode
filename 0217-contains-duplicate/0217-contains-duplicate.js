/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums=nums.sort((a,b)=>(a-b));
    // console.log(nums);
    // if (nums.length <= 1) return false;
    
    for (var i=0; i<nums.length; i++) {
        var current = nums[i];
        for (var k=i+1; k<nums.length; k++) {
            if (nums[i] === nums[k]) {
                return true;
            } 
        }
    }
    return false;
};