/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (45.11%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    7.9K
 * Total Submissions: 16.3K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 
 * 示例:
 * 
 * 
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 * 
 * 说明:
 * 
 * 
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let ans = []
    let path = [];
    const dfs = (start) => {
        if(path.length >= 2) ans.push(path.map(val=>val));
        if(start >= nums.length) return;
        let s = new Set()

        for(let i = start; i < nums.length;++i){
            if(s.has(nums[i])) continue;
            if(path.length == 0){
                s.add(nums[i]);
                path.push(nums[i])
                dfs(i+1)
                path.pop()
            } else {
                if(nums[i] >= path[path.length - 1]){
                    s.add(nums[i]);
                    path.push(nums[i]);
                    dfs(i+1);
                    path.pop();
                }
            }
        }
    }
    dfs(0)
    return ans
};
// @lc code=end

console.log(findSubsequences([4,6,7,7]))