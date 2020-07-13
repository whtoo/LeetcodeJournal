/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (37.36%)
 * Likes:    698
 * Dislikes: 0
 * Total Accepted:    103.3K
 * Total Submissions: 256K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for(const coin of coins){
        for(let x = coin; x < amount+ 1;x++){
            dp[x] = Math.min(dp[x],dp[x-coin] + 1)
        }
    }

    return dp[amount] != Number.MAX_SAFE_INTEGER? dp[amount] : -1 
};
// @lc code=end

console.log(coinChange([186,419,83,408],6249))