/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let n = salary.length - 2;
    let total = salary.reduce((prev,cur)=>{
        if(cur == max || cur == min){
            return prev
        } else{
            return prev + cur
        }
    },0)
    return total / n
};
// @lc code=end

