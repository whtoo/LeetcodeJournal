/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = 0
    for(let i = 0;i < n;++i){
        result ^= (start + 2 * i)
    }
    return result
};
// @lc code=end

