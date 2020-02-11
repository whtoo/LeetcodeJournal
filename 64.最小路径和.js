/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (64.47%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    56.7K
 * Total Submissions: 88K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    /// 1. 取网格的第一行作为我们的搜索记录
    let accLst = grid[0].map(val=>val)
    for(let i = 1;i< grid[0].length;i++){
        accLst[i]+=accLst[i-1]
    }

    let n = grid[0].length
    let m = grid.length
    for (let i = 1; i < m; i++) {
        accLst[0] += grid[i][0]
        for (let j = 1; j < n; j++) {
            let upAcc = accLst[j] + grid[i][j]
            let leftAcc = accLst[j - 1] + grid[i][j]
            accLst[j] = Math.min(upAcc,leftAcc)
        }
    }
    return accLst[n - 1]
};
// @lc code=end