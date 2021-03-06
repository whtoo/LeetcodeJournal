/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (28.82%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    10.8K
 * Total Submissions: 37.5K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 示例 1:
 * 
 * 输入: [2,4,1], k = 2
 * 输出: 2
 * 解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,6,5,0,3], k = 2
 * 输出: 7
 * 解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4
 * 。
 * 随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(!k || prices.length == 0) return 0
    if(prices.length == 1) return 0
    let mid = Math.floor(prices.length/2)
    if(k >= mid) {
        let sum = 0;
        for (let i = 0; i < prices.length - 1; ++i) {
            if (prices[i] < prices[i + 1]) sum += prices[i+1] - prices[i];
        }
        return sum;
    }
    let dp = new Array(k * 2)
    dp[0] = -prices[0]
    dp.fill(Number.MIN_SAFE_INTEGER,1)
    let days = prices.length
    for(let i =1;i < days;i++) {
        dp[0] = Math.max(dp[0],-prices[i])
        for(let j = 1; j < dp.length; j++){
            if(j % 2){
                dp[j] = Math.max(dp[j-1]+prices[i],dp[j])
            } else {
                dp[j] = Math.max(dp[j-1]-prices[i],dp[j])
            }
        }
    }
    return dp.reduce((prev,cur)=> {return Math.max(prev,cur)})
};
// @lc code=end

let ret = maxProfit(2,[2,4,1])
console.log(ret)