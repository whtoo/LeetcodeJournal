/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let cnt = 0
    for(const row of grid){
        for(const col of row){
            if(col < 0) cnt++
        }
    }
    return cnt
};
// @lc code=end

