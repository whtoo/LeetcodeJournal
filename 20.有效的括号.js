/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.77%)
 * Likes:    1636
 * Dislikes: 0
 * Total Accepted:    308K
 * Total Submissions: 736.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length
    if (len % 2) return false;

    const buffer = new Array()
    for(const ch of s){
        if(ch == "{" || ch == "[" || ch == "(") {
            buffer.push(ch)
        } else {
            const p = buffer.pop()
            /**
             * Overhead consume token
             */
            if(p == undefined) return false
            /**
             * Unmatched case
             */
            if(ch == "}" && p != "{") return false
            if(ch == "]" && p != "[") return false
            if(ch == ")" && p != "(") return false
        }
    }

    return buffer.length == 0
};
// @lc code=end

console.log(isValid("{{)}"))