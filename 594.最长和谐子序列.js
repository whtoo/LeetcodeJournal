/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 *
 * https://leetcode-cn.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (45.04%)
 * Likes:    105
 * Dislikes: 0
 * Total Accepted:    12.5K
 * Total Submissions: 26.4K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 * 
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,2,5,2,3,7]
 * 输出: 5
 * 原因: 最长的和谐数组是：[3,2,2,2,3].
 * 
 * 
 * 说明: 输入的数组长度最大不超过20,000.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
//    let maxLen = 0
//    const n = nums.length
//    for(let i = 0; i < n;i++){
//     let curlen = 0
//     let flag = false
//     for(let j = 0;j < n ;j++){
//         if(nums[j] == nums[i]){
//             curlen++
//         } else if(nums[j] + 1 == nums[i]){
//             curlen++
//             flag = true
//         }
//     }
//     if(flag){
//         maxLen = Math.max(curlen,maxLen)
//     }
//     }
//    return maxLen
    let res = 0
    let map = new Map()
    for(const n of nums){
        map.set(n,map.has(n)?map.get(n) + 1:1)
    }

    for(const key of map.keys()){
        if(map.has(key+1)){
            res = Math.max(res,map.get(key)+map.get(key+1))
        }
    }
    return res
};
// @lc code=end

console.log(findLHS([1,3,2,2,5,2,3,7]))