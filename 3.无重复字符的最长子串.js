/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (32.81%)
 * Likes:    3881
 * Dislikes: 0
 * Total Accepted:    542.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 1. 简单贪心开始
    // 1.1 如果没有遇到重复字符串,则将下一个字符加入set
    // 1.2 遇到重复字符串,清空set,将找到的串和与曾经找到的最长子串比较长度
    const occ = new Set()
    const n = s.length
    let rk =-1,ans = 0
    for(let i = 0; i < n;++i){
        if(i != 0){
            occ.delete(s.charAt(i-1))
        }
        while(rk + 1 < n && !occ.has(s.charAt(rk+1))) {
            occ.add(s.charAt(rk+1))
            ++rk
        }
        ans = Math.max(ans,rk - i + 1)
    }
    return ans
    

};
// @lc code=end
console.log(lengthOfLongestSubstring("pwwkew"))
