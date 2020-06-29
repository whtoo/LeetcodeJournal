/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (64.09%)
 * Likes:    249
 * Dislikes: 0
 * Total Accepted:    65K
 * Total Submissions: 98.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root == null) return []

    let layers = []

    let queue = []
    queue.push(root)
    let visitedCnt = 0
    let nextLevelCnt = 0
    let currentLevelCnt = 1
    let layer = []

    while(queue.length != 0){

        let cursor = queue.shift()
        layer.push(cursor.val)
        visitedCnt++

        if(cursor.left) {
            queue.push(cursor.left)
            nextLevelCnt++
        };

        if(cursor.right){
            queue.push(cursor.right)
            nextLevelCnt++
        };

        if(visitedCnt == currentLevelCnt){
            visitedCnt = 0
            currentLevelCnt = nextLevelCnt
            nextLevelCnt = 0
            layers.push(layer.map(val=>val))
            layer = []
        }
    }
    
    return layers.reverse()
};
// @lc code=end

