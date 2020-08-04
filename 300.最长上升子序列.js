/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (43.89%)
 * Likes:    414
 * Dislikes: 0
 * Total Accepted:    47.4K
 * Total Submissions: 107.9K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let dp = new Array(nums.length).fill(0)
    dp[0] = 1
    let maxans = 1;
    for(let i = 1;i < dp.length;++i){
        let maxval = 0
        for(let j = 0; j < i;j++){
            if(nums[i] > nums[j]){
                maxval = Math.max(maxval,dp[j])
            }
        }
        dp[i] = maxval + 1;
        maxans = Math.max(maxans,dp[i]);
    }
    return maxans;
//     if(nums.length == 0) return 0
//    let lstOfLIS = [Number.MAX_SAFE_INTEGER]
//     let maxLenOfLIS = 0
//     for(const ele of nums) {
//         if(ele > lstOfLIS[lstOfLIS.length -1]) {
//             lstOfLIS.push(ele)
//         } else if(ele <= lstOfLIS[0]) {
//             maxLenOfLIS = Math.max(maxLenOfLIS,lstOfLIS.length)
//             lstOfLIS[0] = ele
//         } else if( lstOfLIS[0] < ele < lstOfLIS[lstOfLIS.length-1]){
//             /// 注意这里修改为二叉搜索树(或者二分插入)即可达到O(nlgn)
//             let idx = lstOfLIS.findIndex((val)=> val >= ele)
//             if(idx != -1) {
//                 lstOfLIS[idx] = ele
//             }
//             continue
//         }
//     }
//     maxLenOfLIS = Math.max(maxLenOfLIS,lstOfLIS.length)
//     return maxLenOfLIS
};
// @lc code=end

console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12]))