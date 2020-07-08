/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (37.08%)
 * Likes:    502
 * Dislikes: 0
 * Total Accepted:    87.3K
 * Total Submissions: 230.6K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = []
    let len = nums.length
    for (let i = 0; i < len - 3; i++) {
      // 去除重复情况
      if(nums[i] === nums[i - 1]) continue
      for (let j = i + 1; j < len - 2; j++){
        // 除去重复情况
        if(res.length > 0){
          let res0 = res[res.length - 1][0]
          let res1 = res[res.length - 1][1]
          if(res0 === nums[i] && res1 === nums[j]) continue
        }
        let left = j + 1
        let right = len - 1
        while(left < right){
          let sum = nums[i] + nums[j] +　nums[left] + nums[right]
          if (sum === target) {
            res.push([nums[i], nums[j], nums[left], nums[right]])
            left++
            while(nums[left] === nums[left - 1]) left++
          } else if (sum < target) {
            left++
          } else {
            right--
          }
        }
      }
    }
    return res
};
// @lc code=end

