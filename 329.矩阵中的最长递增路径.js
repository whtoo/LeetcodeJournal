/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (39.58%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 39.2K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个整数矩阵，找出最长递增路径的长度。
 * 
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 * 
 * 示例 1:
 * 
 * 输入: nums = 
 * [
 * ⁠ [9,9,4],
 * ⁠ [6,6,8],
 * ⁠ [2,1,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径为 [1, 2, 6, 9]。
 * 
 * 示例 2:
 * 
 * 输入: nums = 
 * [
 * ⁠ [3,4,5],
 * ⁠ [3,2,6],
 * ⁠ [2,2,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return 0
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
    const m = matrix.length
    const n = matrix[0].length
    let cache = new Array(m)
    for(let i = 0; i < m;++i){
        cache[i] = new Array(n).fill(0)
    }
    const dfs = function(i,j,cache){
        if(cache[i][j] !== 0) return cache[i][j];
        for(const d of dirs){
            const x = i + d[0], y = j + d[1];
            if(x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]){
                cache[i][j] = Math.max(cache[i][j],dfs(x,y,cache))
            }
        }
        return ++cache[i][j]
    }
    let ans = 0
    for(let i = 0;i < m;++i){
        for(let j = 0;j < n;++j){
            ans = Math.max(ans,dfs(i,j,cache))
        }
    }
    return ans
};
// @lc code=end

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))