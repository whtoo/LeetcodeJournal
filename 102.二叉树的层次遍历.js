/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (60.69%)
 * Likes:    548
 * Dislikes: 0
 * Total Accepted:    151.1K
 * Total Submissions: 239.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
var levelOrder = function(root) {
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
    
    return layers
};
// @lc code=end

