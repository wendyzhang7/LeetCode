/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var output = {};
    
   for (let str of strs) {
       
    let key = str.split('').sort().join('');
    
    output[key] ? output[key].push(str) : output[key] = [str]

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