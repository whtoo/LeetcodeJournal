/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (59.89%)
 * Likes:    295
 * Dislikes: 0
 * Total Accepted:    64.2K
 * Total Submissions: 103.7K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let tmpPath = [];
    candidates = candidates.sort((a,b) => {return a - b})
    let backtrack = (tmpPath,target,start) => {
        if(target == 0){
            res.push(tmpPath);
            return;
        }
        for(let i = start;i < n;i++){
            if(target < candidates[i]) break;
            if(i > start && candidates[i-1] == candidates[i]) continue;
            tmpPath.push(candidates[i]);
            backtrack(tmpPath.slice(),target - candidates[i],i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath,target,0);
    return res;
};
// @lc code=end

