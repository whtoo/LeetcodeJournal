/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 *
 * https://leetcode-cn.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (37.75%)
 * Likes:    234
 * Dislikes: 0
 * Total Accepted:    16.7K
 * Total Submissions: 39.4K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key
 * 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 
 * 一般来说，删除节点可分为两个步骤：
 * 
 * 
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 * 
 * 
 * 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。
 * 
 * 示例:
 * 
 * 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * 给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
 * 
 * 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 4   6
 * ⁠/     \
 * 2       7
 * 
 * 另一个正确答案是 [5,2,6,null,4,null,7]。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 2   6
 * ⁠  \   \
 * ⁠   4   7
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    /*
        BST中序遍历是升序的，删除元素时需要注意的
        1. 删除叶子节点，最简单直接删除
        2. 非叶子，并且有右节点，则让右子树中最小值（最左结点）作为当前节点值，然后删除右子树最小值
        3. 非叶子，并且有左节点，找左子树中最大值（最右结点）作为当前节点值，然后删除左子树中最大值
    */
   if(!root){
    return null;
}
if(key < root.val){
    root.left = deleteNode(root.left,key);
} else if(key > root.val){
    root.right = deleteNode(root.right,key);
} else if(root.val === key){
    //如果是叶子节点
    if(!root.left && !root.right){
        root = null;
    } else if(root.right){
        // 1。让右边继任者等于当前值，再从右子树中递归删除继任者
        root.val = successor(root);//得到的是val，不是节点
        root.right = deleteNode(root.right,root.val);
    } else if(root.left){//1. 从左子树中找到前任predecessor,为当前值，并从左子树删除
        root.val = predecessor(root);
        root.left = deleteNode(root.left,root.val);
    }
}
return root;
};
//找到当前节点的右子树中 最小值(BST),root是当前节点
function successor(root){
if(!root){
    return null;
}
root = root.right;
//右子树中 最左边节点最小
while(root.left){
    root = root.left;
}
return root.val;
}
//左子树中 最大节点（最右
function predecessor(root){
if(!root){
    return null;
}
root = root.left;
while(root.right){
    root = root.right;
}
return root.val;

}
// @lc code=end

