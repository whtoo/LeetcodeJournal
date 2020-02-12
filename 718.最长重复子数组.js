/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (48.40%)
 * Likes:    125
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 16.8K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出: 3
 * 解释: 
 * 长度最长的公共子数组是 [3, 2, 1]。
 * 
 * 
 * 说明:
 * 
 * 
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let m = A.length
    let n = B.length
    let dp = new Array(m+1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1).fill(0);
    }
    let ans = 0
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i-1] == B[j-1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } 
            ans = Math.max(dp[i][j],ans)
        }
    }

    return ans
};
// @lc code=end
