/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var output = {};
    var copy = [];
    
   for (var i = 0; i<strs.length; i++) {
       
    copy[i] = strs[i].split('').sort().join('');
    
    output[copy[i]] ? output[copy[i]].push(strs[i]) : output[copy[i]] = [strs[i]]

   }
    
    return Object.values(output);
    
    //create copy of input strs
    //split each element in strs to array
    //sort each array by alphabetical order
    
    //iterate over the copy, if copy[i]=copy[j]
    //output[k].push(copy[i])
    //output[k].push(copy[j])
    
    //return output
};
//input: array of strings
//output: array of arrays, each inside-array contains anagrams