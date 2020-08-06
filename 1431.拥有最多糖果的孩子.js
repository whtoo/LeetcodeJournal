/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let ans = new Array(candies.length).fill(false)
    for(const [i,val] of candies.entries()){
        if(val + extraCandies >= max){
            ans[i] = true
        }
    }
    return ans
};
// @lc code=end

