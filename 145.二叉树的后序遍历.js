/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (70.03%)
 * Likes:    335
 * Dislikes: 0
 * Total Accepted:    89.4K
 * Total Submissions: 124.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
var postorderTraversal = function(root) {
    if(root == null) return []
    let stack = []
    let ret = []
    if(root) stack.push(root)
    while(stack.length > 0){

        const node = stack.pop()
        ret.unshift(node.val)

        if(node.left) {
            stack.push(node.left)
        }

        if(node.right) {
            stack.push(node.right)
        }
    }
    return ret
};
// @lc code=end

