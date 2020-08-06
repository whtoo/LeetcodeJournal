/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let results = new Array(nums.length).fill(0)
    results[0] = nums[0]
    for(let i = 1;i < nums.length;++i){
        results[i] = nums[i] + results[i-1];
    }
    return results
};
// @lc code=end

