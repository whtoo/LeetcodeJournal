/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 *
 * https://leetcode-cn.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (51.38%)
 * Likes:    142
 * Dislikes: 0
 * Total Accepted:    17.9K
 * Total Submissions: 33.4K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 
 * 
 * 注意:
 * 
 * 
 * nums.length 在1到50,000区间范围内。
 * nums[i] 是一个在0到49,999范围内的整数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map()
    for(let i = 0; i < nums.length;i++){
        const key = nums[i]
        if(map.has(key)){
            let lst = map.get(key)
            lst.push(i)
        } else {
            map.set(key,[i])
        }
    }
    let max = Number.MIN_SAFE_INTEGER
    let maxLst = null
    for(const [key,lst] of map.entries()){
        if(lst.length > max){
            max = lst.length
            maxLst = lst
        } else if(lst.length == max) {
            if(maxLst){
                const more = (lst[lst.length - 1] - lst[0]) < (maxLst[maxLst.length-1] - maxLst[0])
                if(more){
                    maxLst = lst
                }
            }
        }

    }

    
    return maxLst[maxLst.length-1] - maxLst[0] + 1
};
// @lc code=end
console.log(findShortestSubArray([1,2,2,3,1,4,2]))
