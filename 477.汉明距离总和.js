/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 *
 * https://leetcode-cn.com/problems/total-hamming-distance/description/
 *
 * algorithms
 * Medium (48.44%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 12.9K
 * Testcase Example:  '[4,14,2]'
 *
 * 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。
 * 
 * 计算一个数组中，任意两个数之间汉明距离的总和。
 * 
 * 示例:
 * 
 * 
 * 输入: 4, 14, 2
 * 
 * 输出: 6
 * 
 * 解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
 * 所以答案为：
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2
 * + 2 + 2 = 6.
 * 
 * 
 * 注意:
 * 
 * 
 * 数组中元素的范围为从 0到 10^9。
 * 数组的长度不超过 10^4。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let res = 0, len = nums.length
    for(let i = 0;i < 32;++i){
        let mask = 1 << i
        let count = 0
        for(const val of nums){
            if((val & mask) != 0) count++
        }
        res += count*(len - count)
    }
    return res
};
// @lc code=end

