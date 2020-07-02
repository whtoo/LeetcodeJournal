/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (37.47%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    15.7K
 * Total Submissions: 40.6K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 示例 1:
 * 
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // 1. 以k为窗口进行滑动
    // 2. 剪枝: drop掉的值必须 < 加入的值,这样的窗口才能是增加的,才有可能是答案,增加部分为差值.
    let maxAvg = nums.slice(0,k).reduce((prev,cur)=>prev+cur,0) / k
    let curAvg = maxAvg
    for(let i = 1,j = k;j < nums.length;i++,j++){
        if(nums[j] > nums[i-1]){
            curAvg += (nums[j] - nums[i-1]) /k
            maxAvg = Math.max(curAvg,maxAvg)
        } else {
            curAvg += (nums[j] - nums[i-1]) /k 
        }
    }
    return maxAvg
};
// @lc code=end

console.log(findMaxAverage([1,12,-5,-6,50,3],4))