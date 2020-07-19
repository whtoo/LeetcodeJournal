/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (46.86%)
 * Likes:    630
 * Dislikes: 0
 * Total Accepted:    122.7K
 * Total Submissions: 247K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    const dfs = function(r,c,nr,nc){
        grid[r][c] = '0'
        if(r-1 >= 0 && grid[r-1][c] == '1') dfs(r-1,c,nr,nc) 
        if(r+1 < nr && grid[r+1][c] == '1') dfs(r+1,c,nr,nc) 
        if(c-1 >= 0 && grid[r][c-1] == '1') dfs(r,c-1,nr,nc)
        if(c+1 < nc && grid[r][c+1] == '1') dfs(r,c+1,nr,nc) 
    }
    const nr = grid.length
    if(!nr) return 0
    const nc = grid[0].length
    let num_islands =0
    for(let r = 0;r < nr;++r){
        for(let c = 0; c < nc;++c){
            if(grid[r][c] == '1'){
                ++num_islands
                dfs(r,c,nr,nc)
            }
        }
    }
    return num_islands
};
// @lc code=end

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
))