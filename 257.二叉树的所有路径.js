/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (61.86%)
 * Likes:    280
 * Dislikes: 0
 * Total Accepted:    41.8K
 * Total Submissions: 65.1K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // BFS
    if(root == null) return []

    let res = []
    let queue = [{node:root,path:""}]

    while(queue.length > 0){
        const pair = queue.pop()
        const pairPath = pair.path == "" ? "" : pair.path + "->"
        if(pair.node.left == null && pair.node.right == null){
            res.push(pairPath + pair.node.val)
        }

        if(pair.node.left) queue.unshift({node:pair.node.left,path:pairPath+pair.node.val})

        if(pair.node.right) queue.unshift({node:pair.node.right,path:pairPath+pair.node.val})
        
    }

    return res
};
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(byLst,i){
    
    if(i >= byLst.len) return null
    if(byLst[i] == null) return null

    let root = new TreeNode(byLst[i])
    root.left = createTree(byLst,2*i+1)
    root.right = createTree(byLst,2*(i+1))
    return root 
}
console.log(binaryTreePaths(createTree([1,2,3,null,5],0)))