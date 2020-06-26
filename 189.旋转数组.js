/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (40.34%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    135.4K
 * Total Submissions: 323.1K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * 
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length;
    var mid = k % n;
    var reverse = function(nums,start,end){
        var tmp;
        while(start < end){
            tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }    
    }

    // 1. 整体反转(Ring)
    //           a1
    //     an         a2
    //    an-1          a3
    //   an-2         ...
    //    an -3       ak-2
    //      ...       ak-1
    ///          ak
    // a1 a2 ... ak ... an
    // an an-1 ... ak ... a1
    reverse(nums,0,n-1);
    // 2. 反转 0..mid-1
    // ak+1 ak+2 ... an ak ... a1
    reverse(nums,0,mid-1);
    // 3. 反转 mid...n-1
    // ak+1 ak+2 ... an a1 a2 .. ak
    reverse(nums,mid,n-1);

}
// @lc code=end

var nums = [1,2,3];
rotate(nums,2);
console.log(nums);
