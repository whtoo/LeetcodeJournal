/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (76.28%)
 * Likes:    626
 * Dislikes: 0
 * Total Accepted:    101.6K
 * Total Submissions: 131.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length
    /// 生成 0 ... n 的所有树的2进制位
    let output = []

    for(let i = 2 ** n; i < 2 ** (n+1);i++){
        let bitmask = i.toString(2).slice(1)
        let buf = []
        for(let j = 0;j < n;j++){
            if(bitmask[j] == '1'){
                buf.push(nums[j])
            }
        }
        output.push(buf)
    }
    return output

};
// @lc code=end

console.log(subsets([1,2,3]))