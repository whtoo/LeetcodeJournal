/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 *
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (33.91%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    5.1K
 * Total Submissions: 15K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const N = nums.length
    if(N <= 1) return N
    const lengths = new Array(N).fill(0)
    const counts = new Array(N).fill(1)

    for(let j = 0;j < N;++j){
        for(let i = 0;i < j;++i){
            if(nums[i] < nums[j]){
                // 说明这歌时候的1..i一定不是单调递增
                if(lengths[i] >= lengths[j]){
                    lengths[j] = lengths[i] + 1
                    counts[j] = counts[i]
                } else if(lengths[i] + 1 === lengths[j]){
                    counts[j] += counts[i]
                }
            }
        }
    }

    let longest = 0, ans = 0
    for(const length of lengths){
        longest = Math.max(length,longest)
    }
    for(let i = 0;i < N;++i){
        if(lengths[i] == longest){
            ans += counts[i]
        }
    }
    return ans
};
// @lc code=end

