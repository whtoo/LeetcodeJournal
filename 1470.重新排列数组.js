/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ret = new Array(nums.length).fill(0)
    let next = 0
    for(let i = 0,j=n,next = 0;j < nums.length;i++,j++,next++){
       ret[next] = nums[i];
       next++
       ret[next] = nums[j];
    }
    return ret
};
// @lc code=end

