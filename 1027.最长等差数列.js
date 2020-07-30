/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 *
 * https://leetcode-cn.com/problems/longest-arithmetic-sequence/description/
 *
 * algorithms
 * Medium (40.15%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    6.5K
 * Total Submissions: 14.4K
 * Testcase Example:  '[3,6,9,12]'
 *
 * 给定一个整数数组 A，返回 A 中最长等差子序列的长度。
 * 
 * 回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <=
 * A.length - 1。并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B
 * 是等差的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[3,6,9,12]
 * 输出：4
 * 解释： 
 * 整个数组是公差为 3 的等差数列。
 * 
 * 
 * 示例 2：
 * 
 * 输入：[9,4,7,2,10]
 * 输出：3
 * 解释：
 * 最长的等差子序列是 [4,7,10]。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[20,1,15,3,10,5,8]
 * 输出：4
 * 解释：
 * 最长的等差子序列是 [20,15,10,5]。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= A.length <= 2000
 * 0 <= A[i] <= 10000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let map = new Map();
    const n = A.length;
    let dp = new Array(n).fill(0).map(_=> new Array(n).fill(2));
    let ans = 0;
    for(let i = 0; i < n;++i){
        for(let j = i+1;j < n;++j){
            let target = 2 * A[i] - A[j];
            if(map.has(target)) dp[i][j] = dp[map.get(target)][i] + 1;
            ans = Math.max(ans,dp[i][j]);
        }
        map.set(A[i],i);
    }
    return ans;
};
// @lc code=end

console.log(longestArithSeqLength([83,20,17,43,52,78,68,45]))