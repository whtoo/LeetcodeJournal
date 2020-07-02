/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 *
 * https://leetcode-cn.com/problems/single-number-iii/description/
 *
 * algorithms
 * Medium (69.53%)
 * Likes:    247
 * Dislikes: 0
 * Total Accepted:    24.3K
 * Total Submissions: 33.3K
 * Testcase Example:  '[1,2,1,3,2,5]'
 *
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
 * 
 * 示例 :
 * 
 * 输入: [1,2,1,3,2,5]
 * 输出: [3,5]
 * 
 * 注意：
 * 
 * 
 * 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
 * 你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // const set = new Map()
    // for(const num of nums){
    //     set.set(num,set.has(num)?set.get(num) + 1:1)
    // }
    // let ret = []
    // set.forEach((val,key)=>{
    //     if(val == 1) {
    //         ret.push(key)
    //     }
    // })
    // return ret

    let bitmask = 0
    for(const num of nums){
        bitmask ^= num
    }
    // rightmost 1-bit diff between x and y
    let diff = bitmask & (-bitmask)

    let x = 0
    for(const num of nums){
        if(num & diff){
            x ^= num
        }
    }
    return [x,bitmask^x]
};
// @lc code=end

