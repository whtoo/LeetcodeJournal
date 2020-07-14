/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (63.93%)
 * Likes:    544
 * Dislikes: 0
 * Total Accepted:    89.9K
 * Total Submissions: 133.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null
    if(preorder.length === 1) return new TreeNode(preorder[0])
    // 1. 根据preorder数组找到root节点
    const root  = preorder[0]
    let rootIdx = inorder.findIndex((val => val == root))
    let leftInOrder = inorder.slice(0,rootIdx)
    let rightInOrder = inorder.slice(rootIdx+1)

    let leftTree = buildTree(preorder.slice(1,1+leftInOrder.length),leftInOrder)
    let rightTree = buildTree(preorder.slice(leftInOrder.length+1),rightInOrder)
   
    let rootNode = new TreeNode(root)
    rootNode.left = leftTree
    rootNode.right = rightTree

    return rootNode
};
// @lc code=end
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))
