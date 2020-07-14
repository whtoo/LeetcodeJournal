/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (66.65%)
 * Likes:    231
 * Dislikes: 0
 * Total Accepted:    40.3K
 * Total Submissions: 58.5K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length === 0) return null
    if(postorder.length === 1) return new TreeNode(postorder[0])
    // 1. 根据postorder数组找到root节点
    const len = postorder.length
    const lastIdx = len - 1

    const root  = postorder[lastIdx]
    let rootIdx = inorder.findIndex((val => val === root))
    let leftInOrder = inorder.slice(0,rootIdx)
    let rightInOrder = inorder.slice(rootIdx+1)

    let leftTree = buildTree(leftInOrder,postorder.slice(0,leftInOrder.length))
    let rightTree = buildTree(rightInOrder,postorder.slice(leftInOrder.length,lastIdx))
   
    let rootNode = new TreeNode(root)
    rootNode.left = leftTree
    rootNode.right = rightTree

    return rootNode
};
// @lc code=end

console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]))
