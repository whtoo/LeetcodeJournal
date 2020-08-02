/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 方阵中战斗力最弱的 K 行
 *
 * https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/description/
 *
 * algorithms
 * Easy (61.68%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 9.5K
 * Testcase Example:  '[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]\n3'
 *
 * 给你一个大小为 m * n 的方阵 mat，方阵由若干军人和平民组成，分别用 1 和 0 表示。
 * 
 * 请你返回方阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 * 
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 * 
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：mat = 
 * [[1,1,0,0,0],
 * ⁠[1,1,1,1,0],
 * ⁠[1,0,0,0,0],
 * ⁠[1,1,0,0,0],
 * ⁠[1,1,1,1,1]], 
 * k = 3
 * 输出：[2,0,3]
 * 解释：
 * 每行中的军人数目：
 * 行 0 -> 2 
 * 行 1 -> 4 
 * 行 2 -> 1 
 * 行 3 -> 2 
 * 行 4 -> 5 
 * 从最弱到最强对这些行排序后得到 [2,0,3,1,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：mat = 
 * [[1,0,0,0],
 * [1,1,1,1],
 * [1,0,0,0],
 * [1,0,0,0]], 
 * k = 2
 * 输出：[0,2]
 * 解释： 
 * 每行中的军人数目：
 * 行 0 -> 1 
 * 行 1 -> 4 
 * 行 2 -> 1 
 * 行 3 -> 1 
 * 从最弱到最强对这些行排序后得到 [0,2,3,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == mat.length
 * n == mat[i].length
 * 2 <= n, m <= 100
 * 1 <= k <= m
 * matrix[i][j] 不是 0 就是 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let collections = new Map();
    for(const [idx,row] of mat.entries()){
        collections.set(idx,0)
        for(const col of row){
            if(col == 1){
              collections.set(idx,collections.has(idx)?collections.get(idx)+1:1)  
            }
        }
    }

    let sortedEntries = [...collections.entries()].sort((a,b)=>{
        if(a[1] < b[1]){
            return -1
        } else if(a[1] > b[1]){
            return 1
        } else {
            if(a[0] < b[0]){
                return -1
            } 
            return 0
        }
    })

    return sortedEntries.slice(0,k).map(pair=>pair[0])
};
// @lc code=end

console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
    , 
   3))