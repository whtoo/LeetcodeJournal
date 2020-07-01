/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (55.95%)
 * Likes:    380
 * Dislikes: 0
 * Total Accepted:    42.2K
 * Total Submissions: 71.6K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [5,6]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // 先遍历,在遍历中遇到任意元素(val)都有 nums[val-1] *= -1
    for(let i = 0; i < nums.length; i++){
        const newIdx = Math.abs(nums[i]) - 1
        if(nums[newIdx] > 0){
            nums[newIdx] *= -1        
        }
    }
    let missing = []
    for(let i = 0; i < nums.length;i++){
        if(nums[i] > 0){
            missing.push(i+1)
        }
    }
    return missing
};
// @lc code=end
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
