/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 *
 * https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/description/
 *
 * algorithms
 * Easy (73.35%)
 * Likes:    32
 * Dislikes: 0
 * Total Accepted:    12.8K
 * Total Submissions: 16.6K
 * Testcase Example:  '[17,18,5,4,6,1]'
 *
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 * 
 * 完成所有替换操作后，请你返回这个数组。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr = [17,18,5,4,6,1]
 * 输出：[18,6,6,6,1,-1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length
    let ans = new Array(n).fill(-1)
    for(let i = n-2;i >= 0;--i){
        ans[i] = Math.max(ans[i+1],arr[i+1])
    }
    return ans
};
// @lc code=end
replaceElements([17,18,5,4,6,1])
