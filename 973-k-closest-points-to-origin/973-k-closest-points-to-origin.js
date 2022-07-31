/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const result = [];

    points.sort((x, y) => {
        return Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2)) - Math.sqrt(Math.pow(y[0], 2) + Math.pow(y[1], 2));    
    })
    
    for (var i=0; i< k; i++) {
        result.push(points[i])
    }
    
    return result;
};