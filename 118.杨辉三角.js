/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (65.58%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    86.3K
 * Total Submissions: 129.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let layers = []
    let layer = []
    let prevLayer = layer

    for(let i = 0 ;i < numRows;i++){
        for(let j =0;j < i + 1; j++){
            if(j == 0 || j == i){
                layer[j] = 1
            } else {
                layer[j] = prevLayer[j-1] + prevLayer[j]
            }
        }
        prevLayer = layer
        layers.push(layer)
        layer = []
    }

    return layers
};
// @lc code=end

console.log(generate(5))