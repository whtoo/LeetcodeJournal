/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 *
 * https://leetcode-cn.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (65.49%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    41.9K
 * Total Submissions: 62.4K
 * Testcase Example:  '38'
 *
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 * 
 * 示例:
 * 
 * 输入: 38
 * 输出: 2 
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 * 
 * 
 * 进阶:
 * 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // Enum
    // let str = num.toString(10)
    // let arr = []
    // for(const ch of str){
    //     arr.unshift(parseInt(ch))
    // }
    // while(arr.length > 1){
    //     num = arr.reduce((prev,val)=>prev+val,0)
    //     str = num.toString(10)
    //     arr = []
    //     for(const ch of str){
    //         arr.unshift(parseInt(ch))
    //     }
    // }

    // return parseInt(arr.join(''))
    return (num - 1) % 9 + 1
};
// @lc code=end

console.log(addDigits(38))