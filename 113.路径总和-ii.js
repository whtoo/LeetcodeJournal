/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (58.48%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    54.4K
 * Total Submissions: 90.8K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \    / \
 * ⁠       7    2  5   1
 * 
 * 
 * 返回:
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    const res = []
    const path = []
   
    const getPath = (root,cntSum) => {
        if(root == null ){
            return
        }
        // 1. 第一次剪枝
        const checkValFlag =  (Math.abs(root.val) <= Math.abs(cntSum)) 
            || root.left != null 
            || root.right != null
        if(checkValFlag){
            path.push(root.val)
            cntSum -= root.val
        } else {
            // 无法继续向下搜索
            return
        }
        // 2.第二次剪枝
        if(cntSum == 0 && root.left == null && root.right == null){
            res.push(path.map(val=>val))
            path.pop()
            return
        } 
        /// 3.第三次剪枝
        if(root.left != null){
            getPath(root.left,cntSum)
        } 
        /// 4.第四次剪枝
        if(root.right != null){
            getPath(root.right,cntSum)
        }

        path.pop()
    }
    
     getPath(root,sum)
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
    root.right = createTree(byLst,2*i+2)
    return root 
}

let sum = pathSum(createTree([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1],0),22)
console.log(sum)