/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (66.02%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    24.1K
 * Total Submissions: 34.2K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给出一个完全二叉树，求出该树的节点个数。
 * 
 * 说明：
 * 
 * 
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第
 * h 层，则该层包含 1~ 2^h 个节点。
 * 
 * 示例:
 * 
 * 输入: 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 * 
 * 输出: 6
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
var countNodes = function(root) {
    if(root == null) return 0
    let queue = [root]
    let cnt = 0
    let currentLevelCnt = 1
    let nextLevelCnt = 0
    let visitedCnt = 0
    while(queue.length > 0){
        const node = queue.pop()
        visitedCnt++

        if(node.left){
            queue.push(node.left)
            nextLevelCnt++
        }

        if(node.right){
            queue.push(node.right)
            nextLevelCnt++
        }

        if(visitedCnt == currentLevelCnt){
            cnt += currentLevelCnt
            currentLevelCnt = nextLevelCnt
            visitedCnt = 0
            nextLevelCnt = 0
        }
    }
    return cnt
};
// @lc code=end

