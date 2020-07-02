/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 *
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (62.84%)
 * Likes:    131
 * Dislikes: 0
 * Total Accepted:    21.3K
 * Total Submissions: 32.9K
 * Testcase Example:  '[3,9,20,15,7]'
 *
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 输出：[3, 14.5, 11]
 * 解释：
 * 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 节点值的范围在32位有符号整数范围内。
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
var averageOfLevels = function(root) {
    let nextLevelCnt = 0
    let visitedLevelCnt = 0
    let layerSum = 0
    let queue = [root]
    let layersAvg = []
    let currentLevelCnt = 1
    while(queue.length > 0){
        let node = queue.shift()
        layerSum += node.val
        visitedLevelCnt++

        if(node.left){
            queue.push(node.left)
            nextLevelCnt++
        }

        if(node.right){
            queue.push(node.right)
            nextLevelCnt++
        }

        if(visitedLevelCnt == currentLevelCnt){
            console.log(layerSum,visitedLevelCnt)
            visitedLevelCnt = 0
            layersAvg.push(layerSum / currentLevelCnt)
            currentLevelCnt = nextLevelCnt
            nextLevelCnt = 0
            layerSum = 0
        }
    }


    return layersAvg

};
// @lc code=end

