/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
 *
 * https://leetcode-cn.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (61.99%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    13.4K
 * Total Submissions: 21.3K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n' +
  '[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * 请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 * 
 * 
 * 
 * 举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 
 * 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
 * 
 * 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的两颗树可能会有 1 到 200 个结点。
 * 给定的两颗树上的值介于 0 到 200 之间。
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let path1 = []
    const bfs = (root,path) => {
        if(root == null) return
        if(root.left == null && root.right == null) {
            path.push(root.val)
            return
        }
        if(root.left) bfs(root.left,path)
        if(root.right) bfs(root.right,path)
    }
    bfs(root1,path1)
    let path2 = []
    bfs(root2,path2)
    console.log(path1,path2)
    if(path1.length != path2.length) return false

    for(let i = 0; i < path1.length;i++){
        if(path1[i] != path2[i]) return false
    }

    return true
};
// @lc code=end

