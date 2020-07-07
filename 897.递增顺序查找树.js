/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
 *
 * https://leetcode-cn.com/problems/increasing-order-search-tree/description/
 *
 * algorithms
 * Easy (65.55%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 16.7K
 * Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]\r'
 *
 * 给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
 * 
 * 
 * 
 * 示例 ：
 * 
 * 输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]
 * 
 * ⁠      5
 * ⁠     / \
 * ⁠   3    6
 * ⁠  / \    \
 * ⁠ 2   4    8
 * /        / \ 
 * 1        7   9
 * 
 * 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * 
 * ⁠1
 * \
 * 2
 * \
 * 3
 * \
 * 4
 * \
 * 5
 * \
 * 6
 * \
 * 7
 * \
 * 8
 * \
 * ⁠                9  
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定树中的结点数介于 1 和 100 之间。
 * 每个结点都有一个从 0 到 1000 范围内的唯一整数值。
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let res = [];
    inOrderNode(root);
    for(var i = 0; i < res.length-1; i++){//注意要用var，如果按我的思路（即，最后那个节点特殊处理）的话用let会错
        res[i].left = null;
        res[i].right = res[i+1];
    }
    // 最后那个节点
    res[i].left = res[i].right = null;
    
    // 注意要从0开始，为什么？可能是因为要求返回的是一个根节点叭
    return res[0];

    // 注意存的是节点
    function inOrderNode(root){
        if(!root)return null;
        inOrderNode(root.left);
        res.push(root);
        inOrderNode(root.right);
    }

};
// @lc code=end

