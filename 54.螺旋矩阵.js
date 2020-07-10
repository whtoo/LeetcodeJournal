/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (38.50%)
 * Likes:    415
 * Dislikes: 0
 * Total Accepted:    67.6K
 * Total Submissions: 166K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let order = []
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0){
        return order
    }

    const rows = matrix.length, columns = matrix[0].length
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1
    while(left <= right && top <= bottom) {
        for(let col = left;col <= right;col++){
            order.push(matrix[top][col])
        }
        for(let row = top + 1; row <= bottom;row++){
            order.push(matrix[row][right])
        }
        if(left < right && top < bottom){
            for(let col = right - 1; col > left;col--){
                order.push(matrix[bottom][col])
            }
            for(let row = bottom;row > top;row--){
                order.push(matrix[row][left])
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return order
};
// @lc code=end

