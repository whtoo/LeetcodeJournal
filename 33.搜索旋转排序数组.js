/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (36.33%)
 * Likes:    800
 * Dislikes: 0
 * Total Accepted:    136.9K
 * Total Submissions: 358.6K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    if(n <= 0) return -1
    if(n == 1) return nums[0] == target ? 0 : -1

    let l = 0
    let r = n - 1
    let mid = Math.floor((l + r) / 2)
    while(l <= r){
        mid = Math.floor((l + r) / 2)
        if(nums[mid] == target) return mid
        if(nums[0] <= nums[mid]){
            // 顺序
            if(nums[0] <= target && target < nums[mid]){
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            // 乱序
            // 判断target 是否在 [mid..n-1]区间
            // 如果在, l应该修改为mid+1,l不变
            // 如果不再,r应该修改为mid-1,l不变
            if(nums[mid] < target && target <= nums[n-1]){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

