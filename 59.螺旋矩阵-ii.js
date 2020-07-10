/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (76.49%)
 * Likes:    202
 * Dislikes: 0
 * Total Accepted:    39.1K
 * Total Submissions: 50.3K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0)
    matrix = matrix.map(val => new Array(n))
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0){
        return order
    }

    const rows = matrix.length, columns = matrix[0].length
    let cnt  = 1
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1
    while(left <= right && top <= bottom) {
        for(let col = left;col <= right;col++){
            matrix[top][col] = cnt
            cnt++
        }
        for(let row = top + 1; row <= bottom;row++){
            matrix[row][right] = cnt 
            cnt++
        }
        if(left < right && top < bottom){
            for(let col = right - 1; col > left;col--){
                matrix[bottom][col] = cnt 
                cnt++
            }
            for(let row = bottom;row > top;row--){
                matrix[row][left] = cnt 
                cnt++
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return matrix
};
// @lc code=end

console.log(generateMatrix(3))