/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (54.46%)
 * Likes:    490
 * Dislikes: 0
 * Total Accepted:    94.8K
 * Total Submissions: 171.8K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 * 
 * 
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let cnt0 = 0
    let cnt1 = 0
    let cnt2 = 0
    for(const val of nums){
        switch(val){
            case 0:
                cnt0++
                break
            case 1:
                cnt1++
                break
            case 2:
                cnt2++
                break
        }
    }
    for(let i = 0;i < nums.length;i++){
        if(cnt0 > 0){
            nums[i] = 0
            cnt0--
        } else if(cnt1 > 0){
            nums[i] = 1
            cnt1--
        } else if(cnt2 > 0) {
            nums[i] = 2
            cnt2--
        }
    }
};
// @lc code=end

sortColors([2,0,2,1,1,0])