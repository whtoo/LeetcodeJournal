/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.60%)
 * Likes:    1974
 * Dislikes: 0
 * Total Accepted:    385.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x != 0){
        result = result * 10 + (x % 10);
        x = (x / 10) | 0;
    }
    /// 32位Signed 整数 d 如果发生溢出,必定有 d | 0 !== d
    /// 所以,反过来说,只要 d | 0 == d,则必定有不溢出.

    return (result | 0) == result ? result : 0;
};
// @lc code=end

console.log(reverse(-121));