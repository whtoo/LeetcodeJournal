/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode-cn.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (65.51%)
 * Likes:    370
 * Dislikes: 0
 * Total Accepted:    34.1K
 * Total Submissions: 50.6K
 * Testcase Example:  '[2,2,3,2]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,3,2]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0,1,0,1,99]
 * 输出: 99
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 1. HashMap 
    // const set = new Map()
    // for(const num of nums){
    //     set.set(num,set.has(num)?set.get(num) + 1:1)
    // }
    // let ret = -1
    // set.forEach((val,key)=>{
    //     if(val == 1) {
    //         ret = key
    //     }
    // })
    // return ret
    let seenOnce = 0, seenTwice = 0
    for(const num of nums){
        // # first appearance: 
        // # add num to seen_once 
        // # don't add to seen_twice because of presence in seen_once
        
        // # second appearance: 
        // # remove num from seen_once 
        // # add num to seen_twice
        
        // # third appearance: 
        // # don't add to seen_once because of presence in seen_twice
        // # remove num from seen_twice

        seenOnce = ~seenTwice & (seenOnce ^ num)
        seenTwice = ~seenOnce & (seenTwice ^ num)
    }
    return seenOnce
};
// @lc code=end

