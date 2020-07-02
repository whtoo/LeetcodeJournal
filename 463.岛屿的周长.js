/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode-cn.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (64.94%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 27.9K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 :
 * 
 * 输入:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 * 
 * 输出: 16
 * 
 * 解释: 它的周长是下面图片中的 16 个黄色的边：
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const dfs = (y,x) => {
        if(!(0 <= y && y < grid.length && 0 <= x && x < grid[0].length)){
            return 1
        }
        if(grid[y][x] == 0){
            return 1
        }
        if(grid[y][x] != 1){
            return 0
        }
        grid[y][x] = 2
        return dfs(y-1,x)
        + dfs(y+1,x)
        + dfs(y,x-1)
        + dfs(y,x+1)
    }

    for(let y = 0; y < grid.length;y++){
        for(let x = 0; x < grid[0].length; x++){
            if(grid[y][x] == 1){
                return dfs(y,x)
            }
        }
    }
    return 0
};
// @lc code=end

