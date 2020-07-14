/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (42.57%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    17.7K
 * Total Submissions: 40.8K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: [3]
 * 
 * 示例 2:
 * 
 * 输入: [1,1,1,3,3,2,2,2]
 * 输出: [1,2]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const third = nums.length / 3 | 0;
    let cnt = new Map()
    for(const n of nums){
        if(cnt.has(n)){
            cnt.set(n,cnt.get(n)+1)
        } else {
            cnt.set(n,1)
        }
    }
    let ret = []
    for(const [key,count] of cnt.entries()){
        if(count > third) ret.push(key)
    }
    return ret
};
// @lc code=end

majorityElement([3,2,3])
majorityElement([1,1,1,3,3,2,2,2])