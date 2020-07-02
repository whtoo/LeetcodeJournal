/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (58.32%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    13.4K
 * Total Submissions: 22.1K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 您需要在二叉树的每一行中找到最大的值。
 * 
 * 示例：
 * 
 * 
 * 输入: 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \  
 * ⁠     5   3   9 
 * 
 * 输出: [1, 3, 9]
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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root == null) return []
    let queue = [root]
    let nextLevelCnt = 0
    let curLevelCnt = 1
    let visitedCnt = 0
    let levelMaxium = Number.MIN_SAFE_INTEGER
    let ret = []
    while(queue.length > 0){
        const node = queue.shift()
        levelMaxium = Math.max(node.val,levelMaxium)
        visitedCnt++
        
        if(node.left != null){
            queue.push(node.left)
            nextLevelCnt++
        }

        if(node.right != null) {
            queue.push(node.right)
            nextLevelCnt++
        }

        if(visitedCnt == curLevelCnt){
            ret.push(levelMaxium)
            levelMaxium = Number.MIN_SAFE_INTEGER
            curLevelCnt = nextLevelCnt
            nextLevelCnt = 0
            visitedCnt = 0
        }
    }

    return ret
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
let sum = largestValues(createTree([1,3,2,5,3,null,9],0),1)
console.log(sum)