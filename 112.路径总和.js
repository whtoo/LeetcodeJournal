/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (48.86%)
 * Likes:    325
 * Dislikes: 0
 * Total Accepted:    85.7K
 * Total Submissions: 171.9K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root == null) return false
    // 1. 判定本层是否满足sum条件
    // 1.1 节点类型leaf
    // 1.2 val == sum
    const flag = (sum == root.val) && (root.left == null && root.right == null)
    // 2. 如果本层非叶子节点下降
    if(root.left != null || root.right != null){
        let leftRet = (root.left != null)?hasPathSum(root.left,sum - root.val):flag;
        let rightRet = (root.right != null)?hasPathSum(root.right,sum - root.val):flag;
        return (leftRet || rightRet)
    }
    // 2.1 如果本层是叶子结点,判断当前节点值是否等于sum
    else {
        return flag
    }

};
// @lc code=end

hasPathSum()