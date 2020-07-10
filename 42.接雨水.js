/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (48.41%)
 * Likes:    1439
 * Dislikes: 0
 * Total Accepted:    119.2K
 * Total Submissions: 230.8K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height == null)
        return 0

    let ans = 0
    let size = height.length
    const max = Math.max
    const min = Math.min
    let leftMax = new Array(size),rightMax = new Array(size)
    leftMax[0] = height[0]
    for(let i =1;i < size;i++){
        leftMax[i] = max(height[i],leftMax[i-1])
    }
    rightMax[size-1] = height[size-1]
    for(let i = size-2;i >= 0;i--){
        rightMax[i] = max(height[i],rightMax[i+1])
    }
    for(let i = 1;i < size-1;i++){
        ans += min(leftMax[i],rightMax[i]) - height[i]
    }
    return ans
};
// @lc code=end

