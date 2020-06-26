/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (57.08%)
 * Likes:    1119
 * Dislikes: 0
 * Total Accepted:    376.4K
 * Total Submissions: 645.1K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start

const reverse = function(x) {
    let result = 0;
    while(x != 0){
        result = result * 10 + (x % 10);
        x = (x / 10) | 0;
    }
    /// 32位Signed 整数 d 如果发生溢出,必定有 d | 0 !== d
    /// 所以,反过来说,只要 d | 0 == d,则必定有不溢出.

    return (result | 0) == result ? result : 0;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x >= 0 ? reverse(x) == x : false;
};
// @lc code=end

console.log(isPalindrome(-121))