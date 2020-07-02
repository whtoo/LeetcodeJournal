/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 *
 * https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * algorithms
 * Easy (60.02%)
 * Likes:    24
 * Dislikes: 0
 * Total Accepted:    7.1K
 * Total Submissions: 11.5K
 * Testcase Example:  '[1,2,2,6,6,6,6,7,10]'
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 
 * 请你找到并返回这个整数
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let n = arr.length
    let map = new Map()
    for(const v of arr){
        if(!map.has(v)){
            map.set(v,1)
        } else {
            map.set(v,map.get(v) + 1)
        }
    }
    let span = Math.floor(arr.length/4)  + 1
    for(const [k,v] of map){
        if(v >= span) return k
    }

    return -1
};
// @lc code=end

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))