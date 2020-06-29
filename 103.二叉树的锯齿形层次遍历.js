/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (53.43%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    54.3K
 * Total Submissions: 99.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
    if(root == null) return []
    let queue = [root]

    let nextLevelCnt = 0
    let currentLevelCnt = 1
    let visitedCnt = 0

    let layer = []
    let layers = []
    let isLeft = true

    while(queue.length > 0) {
        
        let cursor = isLeft? queue.shift() : queue.pop()
        layer.push(cursor.val)

        visitedCnt++
        if(isLeft){
            if(cursor.left) {
                queue.push(cursor.left)
                nextLevelCnt++
            };
    
            if(cursor.right){
                queue.push(cursor.right)
                nextLevelCnt++
            };
        } else{
            if(cursor.right){
                queue.unshift(cursor.right)
                nextLevelCnt++
            };
            if(cursor.left) {
                queue.unshift(cursor.left)
                nextLevelCnt++
            };
        }


        if(visitedCnt == currentLevelCnt){
            visitedCnt = 0
            currentLevelCnt = nextLevelCnt
            nextLevelCnt = 0
            layers.push(layer.map(val=>val))
            layer = []
            isLeft = !isLeft
        }
    } 

    return layers
};
// @lc code=end

