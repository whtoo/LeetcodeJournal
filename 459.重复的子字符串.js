/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode-cn.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (45.17%)
 * Likes:    230
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 42.8K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abab"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "ab" 重复两次构成。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aba"
 * 
 * 输出: False
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: "abcabcabcabc"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length
    if(n == 0) return false

    let next = new Array(n+1).fill(0)
    next[0] = -1
    let i = 0, k = -1
    while(i < n){
        if(k == -1 || s[i] == s[k]){
            i++
            k++
            next[i] = k
        } else {
            k = next[k]
        }
    }
    return next[n] > 0 && n % (n - next[n]) == 0
};
// @lc code=end
console.log(repeatedSubstringPattern("abaababaab"))
