/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 *
 * https://leetcode-cn.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (34.13%)
 * Likes:    134
 * Dislikes: 0
 * Total Accepted:    28.1K
 * Total Submissions: 80.2K
 * Testcase Example:  '[3,2,1]'
 *
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3, 2, 1]
 * 
 * 输出: 1
 * 
 * 解释: 第三大的数是 1.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1, 2]
 * 
 * 输出: 2
 * 
 * 解释: 第三大的数不存在, 所以返回最大的数 2 .
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [2, 2, 3, 1]
 * 
 * 输出: 1
 * 
 * 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
 * 存在两个值为2的数，它们都排第二。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let f1 = Number.MIN_SAFE_INTEGER
    let f2 = Number.MIN_SAFE_INTEGER
    let f3 = Number.MIN_SAFE_INTEGER

    for(const n of nums){
        if(n > f1){
            f3 = f2
            f2 = f1
            f1 = n
        } else if(n > f2 && n != f1){
            f3 = f2
            f2 = n
        } else if(n > f3 && n != f2 && n != f1){
            f3 = n
        }
    }

    return f3 == Number.MIN_SAFE_INTEGER?f1:f3
};
// @lc code=end

let t = thirdMax([1,2,2,5,3,5])
console.log(t)