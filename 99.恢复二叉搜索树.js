/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 *
 * https://leetcode-cn.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (54.73%)
 * Likes:    238
 * Dislikes: 0
 * Total Accepted:    19.9K
 * Total Submissions: 34.7K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * 二叉搜索树中的两个节点被错误地交换。
 * 
 * 请在不改变其结构的情况下，恢复这棵树。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * 输出: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * 输出: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 进阶:
 * 
 * 
 * 使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {

    let first, second, prev;
    const inorder = (root) => {
      if (!root) return;
      inorder(root.left);
      if (prev && prev.val > root.val) {
        if (!first) first = prev;
        second = root;
      }
      prev = root;
      inorder(root.right);
    }
    inorder(root);
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
  
    // Morris
    // if (!root) {
    //     return ;
    // }
    // let curr = root;
    // let node1 = null;
    // let node2 = null;
    // let lastNode = null;
    // while (curr) {
    //     if (curr.left) {
    //         // 找当前节点的前驱节点
    //         let preNode = curr.left;
    //         while (preNode.right && preNode.right != curr) {
    //             preNode = preNode.right;
    //         }
            
    //         if (!preNode.right) { // 设置前驱节点
    //             preNode.right = curr;
    //             curr = curr.left;
    //         } else { // preNode.right == curr；前驱节点已经遍历
    //             // 记录需要调换的节点
    //             if (lastNode && lastNode.val > curr.val) {
    //                 if (node1) {
    //                     node2 = curr;
    //                 } else {
    //                     node1 = lastNode;
    //                     node2 = curr;
    //                 }
    //             }
            
    //             lastNode = curr;
    //             curr = curr.right;
    //             preNode.right = null; // 恢复树的形状
    //         }
    //     } else {
    //         // 记录需要调换的节点
    //         if (lastNode && lastNode.val > curr.val) {
    //             if (node1) {
    //                 node2 = curr;
    //             } else {
    //                 node1 = lastNode;
    //                 node2 = curr;
    //             }
    //         }
        
    //         lastNode = curr;
    //         curr = curr.right;
    //     }
        
    // }
    // const tmp = node1.val;
    // node1.val = node2.val;
    // node2.val = tmp;
};
// @lc code=end

