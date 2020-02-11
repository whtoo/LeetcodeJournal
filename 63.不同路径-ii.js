/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.35%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 122.2K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let accLst = obstacleGrid[0].map(val=>val)
    
    let m = obstacleGrid.length
    let n = (obstacleGrid[0]).length
    /// 1. 增加顶部行的障碍检查
    for(let cur = 0;cur < n;cur++){
        if(obstacleGrid[0][cur] == 1){
            accLst[cur] = 0
            accLst.fill(0,cur)
            break;
        } else {
            accLst[cur] = 1
        }
    }

    /// 2. 增加最左列障碍检查
    let col = -1;
    for (let i = 1; i < m; i++) {
        if(obstacleGrid[i][0] || (col != -1 && i > col)){
            accLst[0] = 0
            col = i
        }
        
        for(let j = 1; j < n; j++){
            accLst[j] += accLst[j-1]
            if(obstacleGrid[i][j] == 1){
                accLst[j] = 0
            }
        }
    }

    return accLst[n-1]
};
// @lc code=end
obstacleGrid = [[1,0]]
console.log(uniquePathsWithObstacles(obstacleGrid))