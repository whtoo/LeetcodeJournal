/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (63.02%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    51.4K
 * Total Submissions: 80.5K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 示例:
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
var rightSideView = function(root) {
    // DFS
    // if(!root) return[]
    // let arr = []

    // const dfs = (root,step,res) => {
    //     if(root){
    //         if(res.length == step){
    //             res.push(root.val)
    //         }
    //         dfs(root.right,step+1,res)
    //         dfs(root.left,step+1,res)
    //     }
    // }
      
    
    // dfs(root,0,arr)
    // return arr
    
    // BFS
    // if(!root) return []
    // let queue = [root]
    // let arr= []
    // while(queue.length > 0){
    //     let len = queue.length
    //     while(len){
    //         let node = queue.shift()
    //         if(len == 1) arr.push(node.val)
    //         if(node.left) queue.push(node.left)
    //         if(node.right) queue.push(node.right)
    //         len--
    //     }
    // }
    // return arr

    // 层次遍历
    if(!root) return []
    let queue = [root]
    let ret = []
    let visitedLevelCnt = 0
    let curLevelCnt = 1
    let nextLevelCnt = 0

    while(queue.length > 0){
        let node = queue.shift()
        visitedLevelCnt++

        if(node.left) {
            queue.push(node.left)
            nextLevelCnt++
        }
        if(node.right){
            queue.push(node.right)
            nextLevelCnt++
        }

        if(visitedLevelCnt == curLevelCnt){
            // 压入每一层最后访问的元素
            ret.push(node.val)
            curLevelCnt = nextLevelCnt
            visitedLevelCnt = 0
            nextLevelCnt = 0
        }
    }

    return ret
};

// @lc code=end

