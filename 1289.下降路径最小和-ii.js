/*
 * @lc app=leetcode.cn id=1289 lang=javascript
 *
 * [1289] 下降路径最小和  II
 *
 * https://leetcode-cn.com/problems/minimum-falling-path-sum-ii/description/
 *
 * algorithms
 * Hard (56.91%)
 * Likes:    10
 * Dislikes: 0
 * Total Accepted:    1K
 * Total Submissions: 1.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个整数方阵 arr ，定义「非零偏移下降路径」为：从 arr 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。
 * 
 * 请你返回非零偏移下降路径数字和的最小值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：arr = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：13
 * 解释：
 * 所有非零偏移下降路径包括：
 * [1,5,9], [1,5,7], [1,6,7], [1,6,8],
 * [2,4,8], [2,4,9], [2,6,7], [2,6,8],
 * [3,4,8], [3,4,9], [3,5,7], [3,5,9]
 * 下降路径中数字和最小的是 [1,5,7] ，所以答案是 13 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length == arr[i].length <= 200
 * -99 <= arr[i][j] <= 99
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
  let n = A.length
  let firstSum = 0, firstPos = -1, secondSum = 0
  for(let i = 0; i < n; ++i) {
    /// 保证一定不影响min的挑选
    let fs = Number.MAX_SAFE_INTEGER 
    let fp = -1
    let ss = Number.MAX_SAFE_INTEGER

    for(let j = 0;j < n;++j){
        let ele = A[i][j]
        let curSum = ((j != firstPos) ? firstSum : secondSum) + ele
        if(curSum < fs) {
            ss = fs
            fs = curSum
            fp = j
        } else if(curSum < ss) {
            ss = curSum
        }
    }

    firstSum  = fs
    firstPos  = fp
    secondSum = ss
  }
  return firstSum
};
// @lc code=end
let matrix = [
    [-73,61,43,-48,-36],
    [3,30,27,57,10],
    [96,-76,84,59,-15],
    [5,-49,76,31,-7],
    [97,91,61,-46,67]] 

let ret = minFallingPathSum(matrix)
console.log(ret)
// @lc code=end

