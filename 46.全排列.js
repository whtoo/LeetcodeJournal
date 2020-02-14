/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (73.88%)
 * Likes:    524
 * Dislikes: 0
 * Total Accepted:    76.4K
 * Total Submissions: 103.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length == 0) return []
    if(nums.length == 1) return [nums]
    let ret = []
    let prev = permute(nums.slice(1))
    for(const l of prev){
        for(let i = 0; i <= l.length; i++){
            let tmp = new Array()
            if(i == 0){
                tmp = [nums[0]].concat(l)
            } else if (i == l.length){
                tmp = l.concat([nums[0]]) 
            } else {
                tmp = l.slice(0,i).concat([nums[0]]).concat(l.slice(i))
            }
            ret.push(tmp)
        }
    }
    return ret
};
// @lc code=end
permute([1,2,3,4])
