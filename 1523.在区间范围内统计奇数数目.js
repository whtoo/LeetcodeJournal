/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (low % 2 == 0 && high % 2 == 0)
        return (high-low) / 2 | 0
    else if(low % 2 != 0 && high % 2 != 0) return ((high - 1 - low - 1) / 2 | 0) + 2
    else return ((high - 1 - low) / 2 | 0) + 1 

};
// @lc code=end

console.log(countOdds(3,7))
console.log(countOdds(8,10))