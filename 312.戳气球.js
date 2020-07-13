/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 *
 * https://leetcode-cn.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (57.43%)
 * Likes:    344
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 24.3K
 * Testcase Example:  '[3,1,5,8]'
 *
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 * 
 * 现在要求你戳破所有的气球。如果你戳破气球 i ，就可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的
 * left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
 * 
 * 求所能获得硬币的最大数量。
 * 
 * 说明:
 * 
 * 
 * 你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * 示例:
 * 
 * 输入: [3,1,5,8]
 * 输出: 167 
 * 解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
 // 先 copy 一份数组做越界处理
 let dp = [],
 n = nums.length,
 numsCopy = new Array( n + 2 );
numsCopy[0] = 1;
numsCopy[n + 1] = 1;
for (let i = 1; i <= n; i++) {
numsCopy[i] = nums[i - 1];
}
n = numsCopy.length; // 把添加了首尾虚拟边界的数组长度赋值给 n

// 初始化 dp 数组，每个区间 dp[i][j] 不包含 i 和 j
for (let i = 0; i < n; i++) {
dp[i] = new Array(n).fill(0);
}

// 动态规划开始，区间长度从 1 扩展到 copy数组的长度
for (let space = 1; space < n; space++) {
for (let i = 0; i + space < n; i++) {
 for (let j = i + 1; j < i + space; j++) {
   dp[i][i + space] = Math.max(dp[i][i + space], dp[i][j] + dp[j][i + space] + numsCopy[i] * numsCopy[j] * numsCopy[i + space]);
 }
}
}

return dp[0][n - 1];

};
// @lc code=end

