/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (66.72%)
 * Likes:    484
 * Dislikes: 0
 * Total Accepted:    82.1K
 * Total Submissions: 119.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 
 * 将图像顺时针旋转 90 度。
 * 
 * 说明：
 * 
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 
 * 示例 1:
 * 
 * 给定 matrix = 
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 * 
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 给定 matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ], 
 * 
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // [i][j] -> [j][n-i-1]
    // 原地修改
    // 1. temp怎么处理
    // 2. 从哪里开始移动
    // Ans: 把四个角想象称风车的四个叶片
    const n = matrix.length
    const len = Math.floor((n+1) / 2)
    const lenHalf = Math.floor(n /2)
    for(let i = 0;i < len;i++){
        for(let j = 0;j < lenHalf;j++){
            // 大风成旋转
            let temp = matrix[n-1-j][i]
            matrix[n-1-j][i] = matrix[n-1-i][n-j-1]
            matrix[n-1-i][n-j-1] = matrix[j][n-1-i]
            matrix[j][n-1-i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }

};
// @lc code=end

