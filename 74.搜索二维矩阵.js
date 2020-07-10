/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (37.22%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    48.9K
 * Total Submissions: 127.9K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return false
    const m = matrix.length
    const n = matrix[0].length
    let range = -1
    let flag = false
    for(let i = 0;i < m;i++){
       if(matrix[i][0] <= target && matrix[i][n-1] >= target) {
           range = i
           break
        }
    }
    if(range != -1){
        // binay-search rang line
        let left = 0,right = n-1, mid = 0
        while(left <= right){
            mid = (left + right) / 2 | 0
            if(matrix[range][mid] == target) return true
            else if(matrix[range][mid] > target) right = mid - 1 
            else if(matrix[range][mid] < target) left = mid + 1
        }
    }   
    return flag
};
// @lc code=end
console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],13))
