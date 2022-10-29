/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    //hint 3: the answer is the number of unique non-zero numbers in input
    //so first filter out values that is not 0
    //then get the unique number of input by using Set
    //then Set.prototype.size gives number of elements in the array
    return new Set(nums.filter(val => val!==0)).size;
};