/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 *
 * https://leetcode-cn.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Hard (37.02%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    15.2K
 * Total Submissions: 38.3K
 * Testcase Example:  '"bcabc"'
 *
 * 
 * 给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: "bcabc"
 * 输出: "abc"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "cbacdcbc"
 * 输出: "acdb"
 * 
 * 
 * 
 * 注意：该题与 1081
 * https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
 * 相同
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

    let stack = []
    let remain = new Map()
    for(const v of s){
        remain.set(v,remain.has(v)?remain.get(v)+1:1)
    }
   for(const c of s){
       if(!stack.includes(c)){
           while(stack.length > 0 && c < stack[stack.length-1] && remain.get(stack[stack.length-1]) > 0){
               stack.pop()
           }
           stack.push(c)
       }
       remain.set(c,remain.get(c)-1)
   }
   return stack.join('')
};
// @lc code=end

