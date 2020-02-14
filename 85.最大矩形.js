/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 *
 * https://leetcode-cn.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (44.25%)
 * Likes:    303
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 38.6K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠ ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length == 0) return 0

    let m = matrix.length
    let n = matrix[0].length

    let left = new Array(n).fill(0)
    let right = new Array(n).fill(n)
    let height = new Array(n).fill(0)

    let maxarea = 0

    for(let i = 0;i < m;i++){
        curLeft = 0
        curRight = n
        // Update height
        for(let j = 0; j < n;j++){
            if(matrix[i][j] == '1'){
                height[j] += 1
            } else {
                height[j] = 0
            }
        }
        /// Update left
        for(let j = 0; j < n;j++){
            if(matrix[i][j] == '1'){
                left[j] = Math.max(left[j],curLeft)
            } else {
                left[j] = 0
                curLeft = j+1
            }
        }
        /// update right
        for(let j = n-1; j >= 0;j--){
            if(matrix[i][j] == '1'){
                right[j] = Math.min(right[j],curRight)
            } else {
                right[j] = n
                curRight = j
            }
        }

        for(let j = 0; j < n; j++){
            maxarea = Math.max(maxarea,height[j]* (right[j] - left[j]))
        }
    }
    return maxarea
};
// @lc code=end

maximalRectangle([
    ["0","1"]])