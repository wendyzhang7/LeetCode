/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    var sorted = [];
    var count = 0;
    
    sorted = boxTypes.sort((a, b) => b[1] - a[1]);
    
    // console.log('sorted', sorted); .
    
    for (var i=0; i < sorted.length; i++) {
        if (sorted[i][0] <= truckSize) {
            count = count + sorted[i][0]*sorted[i][1];
            truckSize = truckSize - sorted[i][0];
        } else {
            count = count + truckSize * sorted[i][1];
            truckSize = 0;
        }
    }
    
    return count;
    
};