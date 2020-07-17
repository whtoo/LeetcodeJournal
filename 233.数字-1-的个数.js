/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 *
 * https://leetcode-cn.com/problems/number-of-digit-one/description/
 *
 * algorithms
 * Hard (32.32%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 24.6K
 * Testcase Example:  '13'
 *
 * 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
 * 
 * 示例:
 * 
 * 输入: 13
 * 输出: 6 
 * 解释: 数字 1 出现在以下数字中: 1, 10, 11, 12, 13 。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0
    for(let i = 1;i <= n;i *= 10){
        let divide = i * 10
        let p = Math.floor(n/divide),k = n % divide,rest = 0
        count += p * i
        rest = (k > (2 * i - 1)) ? i : ((k < i) ? 0 : k - i + 1);
        count += rest
    }
    return count
};
// @lc code=end

console.log(countDigitOne(13))