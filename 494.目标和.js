/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 *
 * https://leetcode-cn.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (43.14%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    37.9K
 * Total Submissions: 85.4K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或
 * -中选择一个符号添加在前面。
 * 
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums: [1, 1, 1, 1, 1], S: 3
 * 输出：5
 * 解释：
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * 一共有5种方法让最终目标和为3。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 数组非空，且长度不会超过 20 。
 * 初始的数组的和不会超过 1000 。
 * 保证返回的最终结果能被 32 位整数存下。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    // let n = 0;
    // const loop = (idx, sum) => {
    //     if(nums.length > idx){
    //         loop(idx + 1, sum + nums[idx]);
    //         loop(idx + 1, sum - nums[idx]);
    //     }else{
    //         sum === S && n++;
    //     }
    // }
    // loop(0, 0);
    // return n;

    let dp = new Array(nums.length).fill(0).map(_=>new Array(2001).fill(0))
    dp[0][nums[0] + 1000] =1
    dp[0][-nums[0] + 1000] += 1
    for (let i = 1; i < nums.length; i++) {
        for (let sum = -1000; sum <= 1000; sum++) {
            if (dp[i - 1][sum + 1000] > 0) {
                dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
                dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
            }
        }
    }
    return S > 1000 ? 0 : dp[nums.length - 1][S + 1000]; 
};

// @lc code=end

console.log(findTargetSumWays([1,1,1,1,1],3))