/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 *
 * https://leetcode-cn.com/problems/rotting-oranges/description/
 *
 * algorithms
 * Easy (46.70%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    29.7K
 * Total Submissions: 58.6K
 * Testcase Example:  '[[2,1,1],[1,1,0],[0,1,1]]'
 *
 * 在给定的网格中，每个单元格可以有以下三个值之一：
 * 
 * 
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 
 * 
 * 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
 * 
 * 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：[[2,1,1],[1,1,0],[0,1,1]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[2,1,1],[0,1,1],[1,0,1]]
 * 输出：-1
 * 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[[0,2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * grid[i][j] 仅为 0、1 或 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //DFS再做一次
    let count = 0, queue = [], total = 0, rot = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
                total++;
            }else if (grid[i][j] === 1) {
                total++;
            }
        }
    }
    if (total === 0) return 0;
    while (queue.length > 0 && rot < total) {
        let size = queue.length;
        rot += size;
        if (rot === total) return count;
        for (let i = 0; i < size; i++) {
            let [ti, tj] = queue.shift();
            if ((ti < grid.length - 1) && grid[ti + 1][tj] === 1) {
                grid[ti + 1][tj] = 2;
                queue.push([ti + 1, tj])
            }
            if (ti > 0 && grid[ti - 1][tj] === 1) {
                grid[ti - 1][tj] = 2;
                queue.push([ti - 1, tj]);
            }
            if ((tj < grid[0].length - 1) && grid[ti][tj + 1] === 1) {
                grid[ti][tj + 1] = 2;
                queue.push([ti, tj + 1]);
            }
            if (tj > 0 && grid[ti][tj - 1] === 1) {
                grid[ti][tj - 1] = 2;
                queue.push([ti, tj - 1]);
            }
        }
        count++;
    }
    return  -1;
};
// @lc code=end

orangesRotting([[2,1,1],[1,1,0],[0,1,1]])