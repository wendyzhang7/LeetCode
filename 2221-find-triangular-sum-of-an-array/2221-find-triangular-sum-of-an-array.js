/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    let newNums = [];
    
    for (var i=0; i<nums.length-1; i++) { 
        newNums[i] = Number((nums[i] + nums[i+1]).toString().slice(-1));
    }
    // console.log(newNums);
   return triangularSum(newNums);
};