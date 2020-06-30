/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.60%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 70.2K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    // let boundry = Math.ceil(Math.sqrt(c))
    // for(let i=0;i <= boundry;i++){
    //     let b = Math.sqrt(c - i*i)
    //     if(b == parseInt(b)){
    //         return true
    //     }
    // }
    // return false
    for (let i = 2; i * i <= c; i++) {
        let count = 0;
        if (c % i == 0) {
            while (c % i == 0) {
                count++;
                c /= i;
            }
            if (i % 4 == 3 && count % 2 != 0)
                return false;
        }
    }
    return c % 4 != 3;
};
// @lc code=end
console.log(judgeSquareSum(4))
