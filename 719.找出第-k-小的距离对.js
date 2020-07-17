/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 k 小的距离对
 *
 * https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/description/
 *
 * algorithms
 * Hard (31.05%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    4.3K
 * Total Submissions: 13K
 * Testcase Example:  '[1,3,1]\n1'
 *
 * 给定一个整数数组，返回所有数对之间的第 k 个最小距离。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值。
 * 
 * 示例 1:
 * 
 * 
 * 输入：
 * nums = [1,3,1]
 * k = 1
 * 输出：0 
 * 解释：
 * 所有数对如下：
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * 因此第 1 个最小距离的数对是 (1,1)，它们之间的距离为 0。
 * 
 * 
 * 提示:
 * 
 * 
 * 2 <= len(nums) <= 10000.
 * 0 <= nums[i] < 1000000.
 * 1 <= k <= len(nums) * (len(nums) - 1) / 2.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    let ret = 0;
    let counter = new Array(1000000).fill(0);
    let idx = 0;
    let i = 0;
    let j = 0;
    const numsSize = nums.length
    for (i = 0; i < numsSize-1; i++)
    {
        for (j = i+1; j < numsSize; j++)
        {
            idx = nums[i]-nums[j];
            idx = idx >= 0 ? idx : -idx;
            counter[idx]++;
        }
    }
    
    idx = 0;
    for (i = 0; i < 1000000; i++)
    {
        idx += counter[i];
        if (idx >= k)
        {
            ret = i;
            break;
        }
    }
    
    return ret;
};
// @lc code=end

console.log(smallestDistancePair([62,100,4],2))