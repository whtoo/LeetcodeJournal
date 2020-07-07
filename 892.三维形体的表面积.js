/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 *
 * https://leetcode-cn.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (55.45%)
 * Likes:    121
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 44.2K
 * Testcase Example:  '[[2]]'
 *
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
 * 
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
 * 
 * 请你返回最终形体的表面积。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[2]]
 * 输出：10
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[1,2],[3,4]]
 * 输出：34
 * 
 * 
 * 示例 3：
 * 
 * 输入：[[1,0],[0,2]]
 * 输出：16
 * 
 * 
 * 示例 4：
 * 
 * 输入：[[1,1,1],[1,0,1],[1,1,1]]
 * 输出：32
 * 
 * 
 * 示例 5：
 * 
 * 输入：[[2,2,2],[2,1,2],[2,2,2]]
 * 输出：46
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 50
 * 0 <= grid[i][j] <= 50
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let dr = [0, 1, 0, -1];
    let dc = [1, 0, -1, 0];

    const N = grid.length;
    let ans = 0;

    for (let r = 0; r < N; ++r)
        for (let c = 0; c < N; ++c)
            if (grid[r][c] > 0) {
                ans += 2;
                for (let k = 0; k < 4; ++k) {
                    let nr = r + dr[k];
                    let nc = c + dc[k];
                    let nv = 0;
                    if (0 <= nr && nr < N && 0 <= nc && nc < N)
                        nv = grid[nr][nc];

                    ans += Math.max(grid[r][c] - nv, 0);
                }
            }

    return ans;
}
// @lc code=end

