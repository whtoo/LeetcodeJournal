/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 *
 * https://leetcode-cn.com/problems/minimum-falling-path-sum/description/
 *
 * algorithms
 * Medium (59.33%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    4.1K
 * Total Submissions: 7K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
 * 
 * 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[[1,2,3],[4,5,6],[7,8,9]]
 * 输出：12
 * 解释：
 * 可能的下降路径有：
 * 
 * 
 * 
 * [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
 * [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
 * [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
 * 
 * 
 * 和最小的下降路径是 [1,4,7]，所以答案是 12。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length == A[0].length <= 100
 * -100 <= A[i][j] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
    let n = A.length
    if (n == 1) {
        return A[0]
    }
    /// 最后一列
    let dp = A.slice(n-1)[0].map((val)=>val)
    for (let i = n - 2; i >= 0; --i) {
        let temp = dp.map(val=>val)
        /// 优先更新边界的两列
        dp[0] = Math.min(A[i][0] + temp[0], A[i][0] + temp[1])
        dp[n-1] = Math.min(A[i][n-1] + temp[n-2],A[i][n-1] + temp[n-1])
        for (let j = 1; j < n-1; ++j) {
            dp[j] = Math.min(A[i][j] + temp[j-1],A[i][j] + temp[j], A[i][j] + temp[j + 1])
        }

    }
    return dp.reduce((prev, cur) => Math.min(prev, cur))
};
// @lc code=end
let matrix = [[10,-98,44],[-20,65,34],[-100,-1,74]]
let ret = minFallingPathSum(matrix)
console.log(ret)