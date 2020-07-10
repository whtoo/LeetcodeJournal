/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (33.02%)
 * Likes:    618
 * Dislikes: 0
 * Total Accepted:    69K
 * Total Submissions: 187.2K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length <= 1) return 0
    if(nums[0] >= nums.length - 1) return 1
    let ans = 0
    for(let i = 0;i < nums.length;){
        const radius = nums[i]
        if(radius + i >= nums.length - 1) {
            ans+=1
            break
        }
        let max = Number.MIN_SAFE_INTEGER
        let maxIdx = -1
        for(let j = i+1; j <= i + radius;j++){
            if(max <= nums[j] + j){
                maxIdx = j
                max = nums[j] + j
            }
        }

        ans += 1
        i = maxIdx
    }
    return ans
};
// @lc code=end

console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]))