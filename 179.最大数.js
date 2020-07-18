/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (35.22%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    35.2K
 * Total Submissions: 96.2K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 
 * 示例 1:
 * 
 * 输入: [10,2]
 * 输出: 210
 * 
 * 示例 2:
 * 
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 * 
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let stack = nums.sort((a,b) => {
        const l = a.toString()
        const r = b.toString()
        const p = l + r
        const q = r + l
        if(p < q) return 1
        else if(p > q) return -1
        
        return 0
    })

    if(stack[0] === 0) return '0'
   
    return stack.join('')
};
// @lc code=end
console.error(largestNumber([0,0]))
