/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 *
 * https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/description/
 *
 * algorithms
 * Medium (63.31%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 28.5K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
 * 
 * 找到所有出现两次的元素。
 * 
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * 
 * 示例：
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [2,3]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ret = []

    for(let i = 0;i <nums.length;i++){
        const loc = Math.abs(nums[i])-1
        if(nums[loc] < 0) ret.push(loc+1)
        nums[loc] = -nums[loc]
    }
   
    return ret
};
// @lc code=end
findDuplicates([4,3,2,7,8,2,3,1])
