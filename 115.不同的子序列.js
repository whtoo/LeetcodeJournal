/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 *
 * https://leetcode-cn.com/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (46.88%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    15.4K
 * Total Submissions: 31.8K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * 给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。
 * 
 * 一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE"
 * 的一个子序列，而 "AEC" 不是）
 * 
 * 题目数据保证答案符合 32 位带符号整数范围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：S = "rabbbit", T = "rabbit"
 * 输出：3
 * 解释：
 * 
 * 如下图所示, 有 3 种可以从 S 中得到 "rabbit" 的方案。
 * (上箭头符号 ^ 表示选取的字母)
 * 
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 * 
 * 
 * 示例 2：
 * 
 * 输入：S = "babgbag", T = "bag"
 * 输出：5
 * 解释：
 * 
 * 如下图所示, 有 5 种可以从 S 中得到 "bag" 的方案。 
 * (上箭头符号 ^ 表示选取的字母)
 * 
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 * ⁠ ^  ^^
 * babgbag
 * ⁠   ^^^
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const n = t.length
    const m = s.length
    let dp = new Array(n+1).fill(0)
    dp.forEach((_,idx)=>dp[idx] = new Array(m+1).fill(0))
    for(let j = 0; j <= m;j++) dp[0][j] = 1
    for(let i = 1;i <= n;i++){
        for(let j = 1;j <= m;j++){
            if(t[i-1] === s[j-1]) dp[i][j] = dp[i-1][j-1] + dp[i][j-1]
            else dp[i][j] = dp[i][j-1]
        }
    }
    return dp[n][m]
};
// @lc code=end

