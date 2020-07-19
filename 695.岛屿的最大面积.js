/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode-cn.com/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (59.45%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    52.9K
 * Total Submissions: 83K
 * Testcase Example:  '[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]'
 *
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
 * 
 * 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被
 * 0（代表水）包围着。
 * 
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
 * 
 * 
 * 
 * 示例 1:
 * 
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,1,1,0,1,0,0,0,0,0,0,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,0,1,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,1,1,0,0],
 * ⁠[0,0,0,0,0,0,0,0,0,0,1,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 
 * 
 * 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
 * 
 * 示例 2:
 * 
 * [[0,0,0,0,0,0,0,0]]
 * 
 * 对于上面这个给定的矩阵, 返回 0。
 * 
 * 
 * 
 * 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const dfs = function(r,c,nr,nc){
        if(!(0<=r && r < grid.length && 0 <= c && c < grid[0].length)){
            return 0
        }
        if(grid[r][c] != 1) return 0
        grid[r][c] = 2
        return 1 + dfs(r-1,c,nr,nc) 
         + dfs(r+1,c,nr,nc) 
         + dfs(r,c-1,nr,nc)
         + dfs(r,c+1,nr,nc) 
    }
    const nr = grid.length
    if(!nr) return 0
    let res = 0
    const nc = grid[0].length
    for(let r = 0;r < nr;++r){
        for(let c = 0; c < nc;++c){
            if(grid[r][c] == 1){
                let a = dfs(r,c,nr,nc)
                res = Math.max(res,a)
            }
        }
    }
    return res
};
// @lc code=end

