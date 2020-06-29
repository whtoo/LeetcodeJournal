/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.96%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    122.1K
 * Total Submissions: 185.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root == null) return []
    let stack = []
    let ret = []
    let node = root
    if(root) stack.push(root)
    while(stack.length > 0){

        node = stack.pop()
        ret.push(node.val)

        if(node.right) {
            stack.push(node.right)
        }

        if(node.left) {
            stack.push(node.left)
        }
    }
    return ret
};
// @lc code=end

