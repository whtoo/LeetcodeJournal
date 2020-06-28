/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (46.51%)
 * Likes:    540
 * Dislikes: 0
 * Total Accepted:    165.7K
 * Total Submissions: 345.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
const searchInsert = function(nums, target,right) {
    let left = 0
    if( target > nums[right] ) return right + 1
    while(left < right) {
         // >>> 表示逻辑右移,即若该数为正，则高位补0，而若该数为负数，则右移后高位同样补0
         // >> 表示有符号右移,如果该数为正，则高位补0，若为负数，则高位补1；
         let index = (left + right) >>> 1;

         if(nums[index] < target){
             left = index + 1
         } else {
             right = index
         }
     }
     return left;
 };
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tail = m + n - 1
    let idx1 = m - 1
    let idx2 = n - 1
    while(idx2 >= 0){
        if(nums1[idx1] > nums2[idx2]){
            nums1[tail] = nums1[idx1]
            idx1--;
            tail--
        } else {
            nums1[tail] = nums2[idx2]
            idx2--;
            tail--;
        }
    }
};
// @lc code=end
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m
    for(const v of nums2){
        const idx = searchInsert(nums1,v,len - 1)
        // Move every elements are on right of v 
        for(let i = len - 1; i >= idx;i--){
           nums1[i+1] = nums1[i]
        }
        nums1[idx] = v
        len++
    }
};
merge([1,2,3,0,0,0],3,[2,5,6],3)