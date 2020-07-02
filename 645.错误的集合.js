/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 *
 * https://leetcode-cn.com/problems/set-mismatch/description/
 *
 * algorithms
 * Easy (40.63%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 37.7K
 * Testcase Example:  '[1,2,2,4]'
 *
 * 集合 S 包含从1到 n
 * 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
 * 
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,2,4]
 * 输出: [2,3]
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数组的长度范围是 [2, 10000]。
 * 给定的数组是无序的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let diff = 0
    const n = nums.length
    let duplicateNum = 0 
    let map = new Map()
    for(let i = 0; i < n;i++){
        map.set(nums[i],map.has(nums[i])?map.get(nums[i]) + 1:1)
        diff += (i+1) - nums[i] 
    }
    map.forEach((val,key) => {
        if(val == 2){
            duplicateNum = key
        }
    })
    return [duplicateNum,duplicateNum+diff]
};
// @lc code=end
console.log(findErrorNums([1,3,3,4]))
