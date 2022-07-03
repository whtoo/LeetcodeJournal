/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1
    var b = 1
    while(n > 0){
        c = a + b
        a = b
        b = c
        n--
    }

    return a
};
// @lc code=end

