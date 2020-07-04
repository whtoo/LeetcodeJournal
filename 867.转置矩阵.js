/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 *
 * https://leetcode-cn.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (66.84%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    20.1K
 * Total Submissions: 29.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[1,2,3],[4,5,6]]
 * 输出：[[1,4],[2,5],[3,6]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 1000
 * 1 <= A[0].length <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let ret = []
    let r = A.length
    let c = A[0].length
   
    for(let j = 0;j < c;j++){
        let row = []
        for(let i = 0;i < r;i++){
            row.push(A[i][j])
        }
        ret.push(row)
    }
    

    return ret
};
// @lc code=end

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))