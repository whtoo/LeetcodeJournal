/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 *
 * https://leetcode-cn.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (41.16%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    6.1K
 * Total Submissions: 14K
 * Testcase Example:  '[0,1]'
 *
 * 给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0]
 * 输出: 2
 * 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 * 
 * 
 * 
 * 注意: 给定的二进制数组的长度不会超过50000。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let arr = new Array(nums.length*2 + 1).fill(-2);
    arr[nums.length] = -1
    let maxlen = 0, count = 0

    for(let i = 0;i < nums.length;++i){
         count = count + (nums[i] == 0 ? -1 : 1);
            if (arr[count + nums.length] >= -1) {
                maxlen = Math.max(maxlen, i - arr[count + nums.length]);
            } else {
                arr[count + nums.length] = i;
            }
    }

    return maxlen;
};
// @lc code=end
console.log(findMaxLength([0,1,0]))
