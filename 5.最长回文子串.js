/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.41%)
 * Likes:    1737
 * Dislikes: 0
 * Total Accepted:    179.4K
 * Total Submissions: 631.3K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 0) return ""
    if(s.length == 1) return s
    /// 1. 常规 DP 版本
    let n = s.length
    /// 2. init dp[n][n] -> i to j
    let dp = new Array(n)
    for(let i = 0; i < n;i++) {
        dp[i] = new Array(n)
        dp[i].fill(false)
    }
    /// 3. 
    let maxLen = 1
    let start = 0
    dp[0][0] = true
    for(let i = 1; i < n;i++){
        dp[i][i] = true
        for(let j=0;j < i;j++){
            if(s[i] == s[j]){
                /// j-> a...x...a <- i
                if(i-j < 3) {
                    dp[j][i] = true
                } else {
                    dp[j][i] = dp[j+1][i-1]
                }
            } else {
                dp[j][i] = false
            }

            if(dp[j][i]){
                let curLen = i-j+1
                if(curLen > maxLen){
                    maxLen = curLen
                    start = j
                }
            }
        }
    }
    return s.slice(start,start+maxLen)
};
// @lc code=end

longestPalindrome('ac')