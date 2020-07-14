/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (47.58%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    66.2K
 * Total Submissions: 128.9K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 * 
 * 要求算法的时间复杂度为 O(n)。
 * 
 * 示例:
 * 
 * 输入: [100, 4, 200, 1, 3, 2]
 * 输出: 4
 * 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums.values())
    let longestStreak = 0
    for(const num of numSet){
        if(!numSet.has(num-1)){
            let cur = num
            let curStreak = 1
            while(numSet.has(cur + 1)){
                cur += 1
                curStreak += 1 
            }
            longestStreak = Math.max(longestStreak,curStreak)
        }
    }
    return longestStreak
};
// @lc code=end

longestConsecutive([100,4,200,1,3,2])