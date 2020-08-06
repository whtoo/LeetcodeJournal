/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let acc = 0
    let pin = 0
    
    while(numBottles > 0){
        acc += numBottles
        pin += numBottles
        numBottles = pin / numExchange | 0
        pin = pin % numExchange  
    }
    return acc
};
// @lc code=end

console.log(numWaterBottles(15,8))