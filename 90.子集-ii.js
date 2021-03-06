/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (58.74%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 63.7K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let n = nums.length;
    nums = nums.sort((a,b) => {return a - b});
    let tmpPath = [];
    let res = [];
    let hash = {}
    let backtrack = (tmpPath,start) => {
        res.push(tmpPath);
       for(let i = start;i < n;i++){
        if(hash[i] || (i > 0 && !hash[i-1] && nums[i-1] == nums[i])) continue;
        hash[i] = true;
        tmpPath.push(nums[i]);
        backtrack(tmpPath.slice(),i+1);
        hash[i] = false;
        tmpPath.pop();
       } 
    }
    backtrack(tmpPath,0);
    return res;
};
// @lc code=end

