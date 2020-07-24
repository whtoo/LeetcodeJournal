/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 *
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (37.17%)
 * Likes:    373
 * Dislikes: 0
 * Total Accepted:    30.9K
 * Total Submissions: 75.6K
 * Testcase Example:  '[5,2,6,1]'
 *
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于
 * nums[i] 的元素的数量。
 * 
 * 示例:
 * 
 * 输入: [5,2,6,1]
 * 输出: [2,1,1,0] 
 * 解释:
 * 5 的右侧有 2 个更小的元素 (2 和 1).
 * 2 的右侧仅有 1 个更小的元素 (1).
 * 6 的右侧有 1 个更小的元素 (1).
 * 1 的右侧有 0 个更小的元素.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const findIndex = (arr, target) => {
        let lo = 0;
        let hi = arr.length - 1;
        while (lo < hi) {
          const mid = (lo + hi) >>> 1;
          if (arr[mid] < target) {// 目标值比mid元素大，mid不是想要的
            lo = mid + 1;         // 移到mid+1，lo是我最后想返回的
          } else {                // 目标值小于等于mid元素 
            hi = mid;             // mid可能是想要的，hi不能移到mid-1
          }
        }
        if (arr[lo] < target) return lo + 1; // 目标值比lo元素大，lo还需+1
        return lo;    // 否则 返回lo
      };
      
    let sorted = []
    let len = nums.length
    let counts = new Array(len)
    for(let i = len -1; i >= 0;--i){
        const index = findIndex(sorted,nums[i])
        sorted.splice(index,0,nums[i])
        counts[i] = index
    }

    return counts
};
// @lc code=end

