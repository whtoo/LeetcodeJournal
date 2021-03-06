/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (64.59%)
 * Likes:    580
 * Dislikes: 0
 * Total Accepted:    50.1K
 * Total Submissions: 76K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n < 2){
        return 1
    }

    let num = new Array(n+1)
    num = num.fill(0)
    num[0] = 1
    for(let i = 1; i < n + 1; i++){
        for(let j= 1; j < i+1;j++){
            num[i] += num[j-1] * num[i-j]
        }
    }
    return num[n]
};
// @lc code=end

