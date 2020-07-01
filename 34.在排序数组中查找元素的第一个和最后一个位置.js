/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (38.90%)
 * Likes:    478
 * Dislikes: 0
 * Total Accepted:    103.3K
 * Total Submissions: 259.7K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let mid, midL, midR;
    // 搜索右边界
    function searchR(left, right, target) {
        while (left <= right) {
            mid = (left + right) >> 1;
            if (nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return right
    }
    // 在区间[0, nums.length - 1搜索target的右边界midR
    midR = searchR(0, nums.length - 1, target)
    // midR < 0说明超过边界；nums[midR] !== target说明无此元素；
    if (midR < 0 || nums[midR] !== target) return [-1, -1]
    // 在区间[0, midR - 1]搜索target - 1的右边界midL
    midL = searchR(0, midR - 1, target - 1)
    return [midL + 1, midR]
};



// @lc code=end

console.log(searchRange([5,7,7,8,8,10],8))