/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (29.52%)
 * Likes:    505
 * Dislikes: 0
 * Total Accepted:    38K
 * Total Submissions: 128.5K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = new Array()
    let maxLen = 0
    stack.push(-1)
    for(let i = 0; i < s.length; i++){
        const ele = s[i]
        if(ele == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if(stack.length == 0) {
                stack.push(i)
            } else {
                maxLen = Math.max(maxLen,i - stack[stack.length - 1])
            }
        }
    }
    
    return  maxLen
};
// @lc code=end
longestValidParentheses("()(()")
