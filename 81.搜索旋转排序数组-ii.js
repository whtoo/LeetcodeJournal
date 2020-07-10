/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (34.88%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    31.9K
 * Total Submissions: 89.3K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。
 * 
 * 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: nums = [2,5,6,0,0,1,2], target = 0
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [2,5,6,0,0,1,2], target = 3
 * 输出: false
 * 
 * 进阶:
 * 
 * 
 * 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
 * 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const n = nums.length
    if(n <= 0) return false
    if(n == 1) return nums[0] == target ? true : false

    let l = 0
    let r = n - 1
    let mid = Math.floor((l + r) / 2)
    while(l <= r){
        mid = Math.floor((l + r) / 2)
        if(nums[mid] == target) return true
        if(nums[l] == nums[mid]) {
            ++l
            continue
        }
        if(nums[l] <= nums[mid]){
            // 顺序
            if(nums[l] <= target && target < nums[mid] ){
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
    return false
};
// @lc code=end

console.log(search([1,3,1,1,1]
,3    ))