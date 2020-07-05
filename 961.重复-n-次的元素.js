/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 *
 * https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/description/
 *
 * algorithms
 * Easy (66.07%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 35.2K
 * Testcase Example:  '[1,2,3,3]'
 *
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
 * 
 * 返回重复了 N 次的那个元素。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,3]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 输入：[2,1,2,5,3,2]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 输入：[5,1,5,2,5,3,5,4]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 4 <= A.length <= 10000
 * 0 <= A[i] < 10000
 * A.length 为偶数
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let set = new Map()
    for(const v of A){
        set.set(v,set.has(v)?set.get(v) + 1:1)
    }
    let max = -1
    let maxNum = -1
    set.forEach((val,key)=>{
        max = Math.max(val,max)
        if(max == val) maxNum = key 
    })

    return maxNum
};
// @lc code=end
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))
