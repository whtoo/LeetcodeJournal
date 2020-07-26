/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 *
 * https://leetcode-cn.com/problems/interleaving-string/description/
 *
 * algorithms
 * Hard (38.53%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    15.9K
 * Total Submissions: 39.2K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
 * 
 * 示例 1:
 * 
 * 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const n = s1.length;
    const m = s2.length;

    if(s1.length == 0 && s2.length == 0 && s3.length == 0) return true
    if(s1.length + s2.length !== s3.length) return false
    
    // let r1 = false,r2 = false

    // if(s1[0] == s3[0]){
    //      r1 = isInterleave(s1.slice(1),s2,s3.slice(1))
    // } 

    // if(s2[0] == s3[0]){
    //      r2 = isInterleave(s1,s2.slice(1),s3.slice(1))
    // } 
    // if(s2[0] !== s3[0] && s1[0] !== s3[0]) {
    //     return false
    // }
    // return r1 || r2

    let dp = new Array(n+1).fill(0)
    dp.forEach((_,idx)=>{
        dp[idx] = new Array(m+1).fill(false)
    })
    dp[0][0] = true
    for(let i = 0;i <= n;++i){
        for(let j =0;j <=m;++j){
            let p = i + j -1
            if(i > 0){
                dp[i][j] |= (dp[i - 1][j] && s1[i - 1] == s3[p]);
            } 
            if(j > 0){
                dp[i][j] |= (dp[i][j-1] && s2[j - 1] == s3[p]);
            }
        }
    }
    return dp[n][m] && true
};
// @lc code=end

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))