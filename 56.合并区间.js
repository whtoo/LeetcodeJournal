/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (40.15%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    114.2K
 * Total Submissions: 267.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0])
    let merged = []
    for(const interval of intervals){
        if(merged.length  <= 0 || merged[merged.length -1][1] < interval[0]){
            merged.push(interval)
        } else {
            merged[merged.length -1][1] = Math.max(merged[merged.length -1][1],interval[1])
        }
    }
    return merged
};
// @lc code=end

