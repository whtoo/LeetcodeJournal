/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (38.66%)
 * Likes:    432
 * Dislikes: 0
 * Total Accepted:    27.2K
 * Total Submissions: 70.4K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 
 * 
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 * 
 * 
 * 
 * 
 * 
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    return calculateArea(heights,0,heights.length - 1)
};
/**
 * @param {number[]} heights
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var calculateArea = function(heights,start,end){
    if(start > end) return 0

    let minindex = start
    for(let i = start; i <= end;i++){
        if(heights[minindex] > heights[i]) minindex = i
    }

    return Math.max(heights[minindex] * (end - start + 1), Math.max(calculateArea(heights, start, minindex - 1), calculateArea(heights, minindex + 1, end)))
}
// @lc code=end
let q = largestRectangleArea([4,2,3,5,6,8,7])
console.log(q)