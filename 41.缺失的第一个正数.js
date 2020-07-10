/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (37.45%)
 * Likes:    667
 * Dislikes: 0
 * Total Accepted:    75.3K
 * Total Submissions: 187.1K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1,2,0]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,8,9,11,12]
 * 输出: 1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
   const n = nums.length
   for(let i = 0;i < n;i++){
    if(nums[i] <= 0){
        nums[i] = n + 1
    }
   }
   for(let i = 0;i < n;i++){
       let num = Math.abs(nums[i])
       if(num <= n){
           nums[num -1] = -Math.abs(nums[num-1])
       }
   }

   for(let i = 0; i < n;i++){
       if(nums[i] > 0){
           return i+1
       }
   }
   return n + 1
};
// @lc code=end

console.log(firstMissingPositive([1,2,0]))