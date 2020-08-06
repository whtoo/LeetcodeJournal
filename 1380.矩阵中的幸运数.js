/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let map = new Map()
    let r = matrix.length;
    let c = matrix[0].length;
    let ans = []
    for(const row of matrix){
        let min = 10e6
        let minIdx = -1 
        for(let j = 0;j < c;++j ){
            if(min > row[j]) {
                min = row[j];
                minIdx = j;
            }
        }
        map.set(min,minIdx)
    }
    for(const [key,val] of map){
        let passed = true
        for(let j =0; j < r;++j){
            if(key < matrix[j][val]){
                passed = false;
                break
            }
        }
        if(passed) ans.push(key) 
    }
    return ans
};
// @lc code=end

