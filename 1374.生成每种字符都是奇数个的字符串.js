/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return "a".repeat(n - 1) + (n % 2 == 1 ? "a" : "b");
 };
// @lc code=end

