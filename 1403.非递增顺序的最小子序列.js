/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    if(nums.length == 1) return nums
    nums.sort((a,b)=>b-a)
    let total = nums.reduce((a,b)=>a+b,0)
    let tmp = 0
    let ans = []
    for(const [idx,cur] of nums.entries()){
        tmp += nums[idx]
        ans.push(nums[idx])
        if(tmp > total >> 1) return ans
    }
};
// @lc code=end
console.log(minSubsequence([4,3,10,9,8]))
