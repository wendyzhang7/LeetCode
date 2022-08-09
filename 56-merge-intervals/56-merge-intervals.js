/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    console.log(intervals)
    
    for (var i=0; i<intervals.length - 1; i++) {
        const cur = intervals[i];
        const next = intervals[i+1];
        
        if (cur[1] >= next[0]) {
            cur[1] = Math.max(cur[1], next[1]);
            intervals.splice(i, 2, cur);
            i--;
        }
    }
    return intervals;
};

//iterate through input intervals
//for interval[0] and interval[1], compare interval[0][1] and interval[1][0]
//if interval[0][1] === or > interval[0][1], then new interval is interval[0][0] + interval[1][1]
//push new interval into output array
//intervlas.splice(0, 2);
//intervals.unshift(new interval)
//plug intervals back to recursion
//
//else if interval[0][1] < interval[1][0] for rest of the intervals, then output intervals;