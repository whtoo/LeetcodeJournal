/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (47.01%)
 * Likes:    394
 * Dislikes: 0
 * Total Accepted:    55.8K
 * Total Submissions: 110.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * 
 * 
 * 
 * 示例 :
 * 给定二叉树
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 * 
 * 
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
    let ans = 1
    const depth = (node) => {
        if(node == null) return 0
        let L = depth(node.left)
        let R = depth(node.right)
        ans = Math.max(ans,L+R+1)
        return Math.max(L,R) + 1
    }

    depth(root)
    return ans - 1
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
    console.log(root,root.left,root.right)
    return root 
}
console.log(diameterOfBinaryTree(createTree([1,2,3,4,5],0)))