/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let acc = new Array(nums.length).fill(0)
    acc[0] = nums[0]
    for(let i = 1;i < nums.length;++i){
        acc[i] = acc[i-1] + nums[i]
    }
    let min = Math.min(...acc)
    if(min < 0) return 1 - min
    else {
        return 1
    }
};
// @lc code=end

console.log(minStartValue([-3,2,-3,4,2]))
console.log(minStartValue([2,3,5,-5,-1]))