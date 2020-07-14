/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 *
 * https://leetcode-cn.com/problems/summary-ranges/description/
 *
 * algorithms
 * Medium (50.76%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 20.8K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 * 
 * 示例 1:
 * 
 * 输入: [0,1,2,4,5,7]
 * 输出: ["0->2","4->5","7"]
 * 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 * 
 * 示例 2:
 * 
 * 输入: [0,2,3,4,6,8,9]
 * 输出: ["0","2->4","6","8->9"]
 * 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = null
    let end = null
    let str = []
    nums.push(nums[nums.length-1])
    for(const v of nums){
        if(start == null){
            start = v
            end = v
        } else if(end + 1 === v){
            end = v
        } else if(end + 1 !== v){
            if(start !== end){
                str.push(start + "->" + end)
            } else{
                str.push(start+"")
            }
            start = v;
            end = v
        }
    }
    return str
};
// @lc code=end
summaryRanges(["0->2","4->5","7"])
