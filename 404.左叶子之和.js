/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (53.34%)
 * Likes:    161
 * Dislikes: 0
 * Total Accepted:    28K
 * Total Submissions: 51K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
//    let sum = 0, queue = []
//    queue.unshift([root,false])

//    while(queue.length >0){
//        let size = queue.length
//        while(size > 0){
//            let node = queue.shift()
//            if(node[1] == true && node[0].left == null && node[0].right == null){
//                sum += node[0].val
//            }
//            if(node[0] && node[0].left) queue.push([node[0].left,true])
//            if(node[0] && node[0].right) queue.push([node[0].right,false])
//            size--
//        }
//    }
//    return sum
    const isLeaf = (node) => {
        if(!node) return false
        if(!node.left && !node.right) return true
    }

    if(!root) return 0
    if(root.left){
        if(isLeaf(root.left)){
            return root.left.val + sumOfLeftLeaves(root.right)
        } else {
            return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
        }
    } else {
        return sumOfLeftLeaves(root.right)
    }
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
let sum = sumOfLeftLeaves(createTree([3,9,20,null,null,15,7],0))
console.log(sum)