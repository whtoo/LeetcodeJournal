/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let i =0;
    while(i < citations.length && citations[citations.length - 1 - i] > i) {
        i++;
    }
    return i;
};
// @lc code=end

console.log(hIndex([0,1,3,5,6]))