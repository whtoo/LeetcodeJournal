/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 *
 * https://leetcode-cn.com/problems/binary-tree-tilt/description/
 *
 * algorithms
 * Easy (52.67%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    13.4K
 * Total Submissions: 24.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个二叉树，计算整个树的坡度。
 * 
 * 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。
 * 
 * 整个树的坡度就是其所有节点的坡度之和。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * ⁠        1
 * ⁠      /   \
 * ⁠     2     3
 * 输出：1
 * 解释：
 * 结点 2 的坡度: 0
 * 结点 3 的坡度: 0
 * 结点 1 的坡度: |2-3| = 1
 * 树的坡度 : 0 + 0 + 1 = 1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 任何子树的结点的和不会超过 32 位整数的范围。
 * 坡度的值不会超过 32 位整数的范围。
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
 * @return {number}
 */
var findTilt = function(root) {
    if(root == null) return 0
    if(root.left == null && root.right == null) return 0
    let ls = 0
    let rs = 0
    const sumTree = (node) => {
        if(node  == null) return 0
        let sum = node.val

        if(node.left){
            sum += sumTree(node.left)
        }
        if(node.right){
            sum += sumTree(node.right)
        }
        return sum
    }
    ls = root.left ? sumTree(root.left) : ls
    rs = root.right? sumTree(root.right) : rs
    let lt = 0
    if(root.left) {
        lt = findTilt(root.left)
    }
    let rt = 0
    if(root.right){
        rt = findTilt(root.right)
    }
    return Math.abs(ls - rs) + lt + rt
};
// @lc code=end

