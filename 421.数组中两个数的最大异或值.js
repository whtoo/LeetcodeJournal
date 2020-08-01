/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (57.90%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    5.3K
 * Total Submissions: 9K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
 * 
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 
 * 你能在O(n)的时间解决这个问题吗？
 * 
 * 示例:
 * 
 * 
 * 输入: [3, 10, 5, 25, 2, 8]
 * 
 * 输出: 28
 * 
 * 解释: 最大的结果是 5 ^ 25 = 28.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let ans = 0
    for(let i = 0;i < nums.length;++i){
        for(let j = i+1;j < nums.length;++j){
            ans = Math.max(ans,nums[i] ^ nums[j])
        }
    }
    return ans
};
// @lc code=end

