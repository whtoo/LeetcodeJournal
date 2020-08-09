/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0;i < nums.length;++i){
        for(let j = i+1;j <nums.length;++j){
            if(Math.abs(nums[i] - nums[j]) <= t && Math.abs(i-j) <= k) return true
        }
    }
    return false
};
// @lc code=end

