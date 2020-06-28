/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (49.89%)
 * Likes:    876
 * Dislikes: 0
 * Total Accepted:    166.5K
 * Total Submissions: 318.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 空树是对称的
    if(!root) return true
    // 左右栈主要就是为了模拟DFS
    let leftStack = [], rightStack = []
    let curLeft = root.left
    let curRight = root.right
    while(curLeft || curRight || leftStack.length || rightStack.length){
        while(curLeft){
            leftStack.push(curLeft)
            curLeft = curLeft.left
        }
    
        while(curRight){
            rightStack.push(curRight)
            curRight = curRight.right
        }

        if(leftStack.length != rightStack.length) return false
         curLeft = leftStack.pop()
         curRight = rightStack.pop()

         if(curLeft.val != curRight.val) return false

         curLeft = curLeft.right
         curRight = curRight.left
    }

    return true
};
// @lc code=end

