/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 *
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (68.32%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    16.4K
 * Total Submissions: 23.3K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，在树的最后一行找到最左边的值。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * 
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 
 * 输出:
 * 1
 * 
 * 
 * 
 * 
 * 示例 2: 
 * 
 * 
 * 输入:
 * 
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   5   6
 * ⁠      /
 * ⁠     7
 * 
 * 输出:
 * 7
 * 
 * 
 * 
 * 
 * 注意: 您可以假设树（即给定的根节点）不为 NULL。
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root == null) return []
    let queue = [root]
    let nextLevelCnt = 0
    let curLevelCnt = 1
    let visitedCnt = 0
    let level = 0
    let leftNode = Number.MIN_SAFE_INTEGER
    while(queue.length > 0){
        const node = queue.shift()
        if(visitedCnt == 0){
            leftNode = node.val
        }
        visitedCnt++
        
        if(node.left != null){
            queue.push(node.left)
            nextLevelCnt++
        }

        if(node.right != null) {
            queue.push(node.right)
            nextLevelCnt++
        }

        if(visitedCnt == curLevelCnt){
            curLevelCnt = nextLevelCnt
            nextLevelCnt = 0
            visitedCnt = 0
            level++
        }
    }

    return leftNode
};
// @lc code=end

